import { HeroSummaryProps } from "../components/HeroSummary/HeroSummary";
import { MatchData } from "../hooks/useFetch";
import { dotaconstants } from "./constants";

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

export interface HeroMatchData {
    heroId: number
    win: number
    lose: number
}

export function getHeroesToShowFromMatchData(matchesData: MatchData[]): HeroMatchData[] {

    let heroMap = new Map<number, HeroMatchData>();

    //go through each match and add up the results per-hero
    matchesData.forEach((value: MatchData, index: number, array: MatchData[]) => {

        //create a new HeroMatchData if necessary
        if(!heroMap.has(value.hero_id)) {
            heroMap.set(value.hero_id, { heroId: value.hero_id, win: 0, lose: 0 });
        }

        //update the win/loss for the hero
        let matchDataForHero = heroMap.get(value.hero_id);
        if(matchDataForHero) {
            if(getWinFromMatchData(value)) {
                matchDataForHero.win = matchDataForHero.win + 1;
            } else {
                matchDataForHero.lose = matchDataForHero.lose + 1;
            }
        }

    });

    //go through the per-hero results and decide which ones to show
    const NUM_MATCHES_FOR_SIGNIFICANCE = 5;
    let heroesToShow: HeroMatchData[] = [];
    heroMap.forEach((value: HeroMatchData, key: number, map: Map<number, HeroMatchData>) => {
        //are there enough matches to be significant
        if(value.win + value.lose > NUM_MATCHES_FOR_SIGNIFICANCE) {
            heroesToShow.push({ heroId: value.heroId, win: value.win, lose: value.lose });
        }
    });

    //sort the heroes to show
    heroesToShow.sort((a, b): number => { 
        if((a.win + a.lose) < (b.win + b.lose)) {
            return 1;
        }

        if((a.win + a.lose) > (b.win + b.lose)) {
            return -1;
        }

        return 0;
     });

     return heroesToShow;
}