import { MatchData } from "../hooks/useFetch";
import { BEST_HEROES, dotaconstants, WORST_HEROES } from "./constants";

export function getHeroIconFromName(name: string): string {

    const values = Object.keys(dotaconstants.heroes).map(key => dotaconstants.heroes[key]);

    let toReturn = "";

    for(let i = 0; i < values.length; i++) {
        if(values[i].name === name) {
            toReturn = values[i].img;
            break;
        }
    }
    
    return toReturn;
}

export function getHeroIconFromId(id: number): string {
    return dotaconstants.heroes[id].img;
}

export function getHeroLocalizedNameFromName(name: string): string {

    const values = Object.keys(dotaconstants.heroes).map(key => dotaconstants.heroes[key]);

    let toReturn = "";

    for(let i = 0; i < values.length; i++) {
        if(values[i].name === name) {
            toReturn = values[i].localized_name;
            break;
        }
    }
    
    return toReturn;
}

export function getHeroLocalizedNameFromId(id: number): string {
    return dotaconstants.heroes[id].localized_name;
}


export function getWinFromMatchData(matchData: MatchData): boolean {

    //radiant side are player_slots [0,1,2,3,4]
    if(matchData.player_slot < 5) {
        return matchData.radiant_win;
    }
    else {
        return !matchData.radiant_win;
    }
}

export interface HeroMatchesData {
    heroId: number
    win: number
    lose: number
    kills_avg: number
    deaths_avg: number
    assists_avg: number
    hero_damage_avg: number
    tower_damage_avg: number
}

export function getHeroesToShowFromMatchData(matchesData: MatchData[], bestworst: string): HeroMatchesData[] {

    let heroMap = new Map<number, HeroMatchesData>();

    //go through each match and add up the results per-hero
    matchesData.forEach((value: MatchData, index: number, array: MatchData[]) => {

        //create a new HeroMatchesData if necessary
        if(!heroMap.has(value.hero_id)) {
            heroMap.set(value.hero_id, { heroId: value.hero_id, win: 0, lose: 0, kills_avg: 0, deaths_avg: 0, assists_avg: 0, hero_damage_avg: 0, tower_damage_avg: 0 });
        }

        let matchDataForHero = heroMap.get(value.hero_id);
        if(matchDataForHero) {

            //update the win/loss for the hero
            if(getWinFromMatchData(value)) {
                matchDataForHero.win = matchDataForHero.win + 1;
            } else {
                matchDataForHero.lose = matchDataForHero.lose + 1;
            }

            //update the running totals inside the spot that will eventually hold the average values
            matchDataForHero.kills_avg = matchDataForHero.kills_avg + value.kills;
            matchDataForHero.deaths_avg = matchDataForHero.deaths_avg + value.deaths;
            matchDataForHero.assists_avg = matchDataForHero.assists_avg + value.assists;
            matchDataForHero.hero_damage_avg = matchDataForHero.hero_damage_avg + value.hero_damage;
            matchDataForHero.tower_damage_avg = matchDataForHero.tower_damage_avg + value.tower_damage;
        }

    });

    //go through the per-hero results and decide which ones to show
    const NUM_MATCHES_FOR_SIGNIFICANCE = 4;
    let heroesToShow: HeroMatchesData[] = [];
    heroMap.forEach((value: HeroMatchesData, key: number, map: Map<number, HeroMatchesData>) => {
        //are there enough matches to be significant and is the win rate over 50%
        if(value.win + value.lose >= NUM_MATCHES_FOR_SIGNIFICANCE) {

            //calculate the averages
            let numMatches = value.win + value.lose;
            let kills_avg = Number((value.kills_avg / numMatches).toFixed(1));
            let deaths_avg = Number((value.deaths_avg / numMatches).toFixed(1));
            let assists_avg = Number((value.assists_avg / numMatches).toFixed(0));
            let hero_damage_avg = Number((value.hero_damage_avg / numMatches).toFixed(0));
            let tower_damage_avg = Number((value.tower_damage_avg / numMatches).toFixed(0));

            //
            if(bestworst === BEST_HEROES && (value.win / (value.win + value.lose)) >= 0.5) {
                heroesToShow.push({ heroId: value.heroId, win: value.win, lose: value.lose, kills_avg: kills_avg, deaths_avg: deaths_avg, assists_avg: assists_avg, hero_damage_avg: hero_damage_avg, tower_damage_avg: tower_damage_avg });
            }
            else if(bestworst == WORST_HEROES && (value.win / (value.win + value.lose)) < 0.5) {
                heroesToShow.push({ heroId: value.heroId, win: value.win, lose: value.lose, kills_avg: kills_avg, deaths_avg: deaths_avg, assists_avg: assists_avg, hero_damage_avg: hero_damage_avg, tower_damage_avg: tower_damage_avg });
            }
        }
    });

    //sort the heroes to show
    heroesToShow.sort((a, b): number => { 
        if((a.win / (a.win + a.lose)) < (b.win / (b.win + b.lose))) {
            if(bestworst === BEST_HEROES) {
                return 1;
            } else {
                return -1;
            }
        }

        if((a.win / (a.win + a.lose)) > (b.win / (b.win + b.lose))) {
            if(bestworst === BEST_HEROES) {
                return -1;
            } else {
                return 1;
            }
        }

        return 0;
     });

     return heroesToShow;
}