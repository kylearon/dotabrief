
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import FilterBar from '../../components/FilterBar/FilterBar';

import Header from '../../components/Header/Header'
import HeroSummary, { HeroSummaryProps } from '../../components/HeroSummary/HeroSummary';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import { useFetchMatches, useFetchPlayer, useFetchWinLoss } from '../../hooks/useFetch';
import { BEST_HEROES, GAME_MODE_TURBO, SIDE_BOTH, THIS_PATCH } from '../../utils/constants';
import { getHeroesToShowFromMatchData, getHeroIconFromId, getHeroLocalizedNameFromId, getHeroNameFromId, HeroMatchesData } from '../../utils/utils';

import { useCookies } from 'react-cookie';

//load an svg as a loading icon https://stackoverflow.com/a/70964618
const loading: string = require("../../assets/loading.svg").default;


export interface MainPageProps {
    steamId: string
    setSteamId: (id:string) => void
}

export default function MainPage({props} : {props: MainPageProps}) {
    
    const theme = useTheme();

    const [cookies, setCookie, removeCookie] = useCookies(['steamIds']);

    const [timeframe, setTimeframe] = useState<string>(THIS_PATCH);

    const [bestworst, setBestworst] = useState<string>(BEST_HEROES);

    const [gameMode, setGameMode] = useState<string>(GAME_MODE_TURBO);

    const [side, setSide] = useState<string>(SIDE_BOTH);
    
    const [showLoading, setShowLoading] = useState<boolean>(true);

    //load the heros to show
    const [ heroesToShow, setHeroesToShow ] = useState<HeroSummaryProps[]>([]);


    //load the player data
    const { playerData, playerDataError } = useFetchPlayer(props.steamId);

    //load the win/loss data based on the timeframe
    const { winLossData, winLossError } = useFetchWinLoss(props.steamId, timeframe, gameMode, side);

    //load the match data from the timeframe
    const { matchesData, matchesError } = useFetchMatches(props.steamId, timeframe, gameMode, side);


    // useEffect(() => {
    //     console.log("timeframe changed");
    //     console.log(timeframe);
    // },[timeframe]);

    useEffect(() => {
        console.log("player data changed");
        console.log(playerData);

        if(playerData) {
            
            //clone the current steamIds cookie into a new object which will be modified
            var clone = Object.assign({}, cookies['steamIds']);

            //add data to the cookie clone for this player
            clone[playerData.profile.account_id] = playerData;

            //save the steamIds cookie back
            setCookie('steamIds', clone, { path: '/' });
        }

    },[playerData]);

    useEffect(() => {
        console.log("timeframe/gameMode changed");
        setHeroesToShow([]);
        setShowLoading(true);
    },[timeframe, gameMode]);

    useEffect(() => {
        console.log("matches data changed");
        console.log(matchesData);

        let newHeroesToShow: HeroSummaryProps[] = [];
        if(matchesData) {
            let heroesToShowMatchData = getHeroesToShowFromMatchData(matchesData, bestworst);
            heroesToShowMatchData.forEach((value: HeroMatchesData, index: number, array: HeroMatchesData[]) => {
                newHeroesToShow.push({
                    id: value.heroId,
                    localized_name: getHeroLocalizedNameFromId(value.heroId), 
                    name: getHeroNameFromId(value.heroId), 
                    win: value.win, 
                    loss: value.lose, 
                    img: getHeroIconFromId(value.heroId),
                    kills_avg: value.kills_avg,
                    deaths_avg: value.deaths_avg,
                    assists_avg: value.assists_avg,
                    hero_damage_avg: value.hero_damage_avg,
                    tower_damage_avg: value.tower_damage_avg,
                    games_match_data: value.games_match_data 
                });
                
            });
            setHeroesToShow(newHeroesToShow);
            
            setShowLoading(false);
        }

    },[matchesData, bestworst]);

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ userId: playerData ? playerData.profile.personaname : "undefined", setSteamId: props.setSteamId }}  />
                
                    <PlayerHeader props={{playerData: playerData, winLossData: winLossData }}/>

                    <FilterBar props={{ bestworst: bestworst, setBestworst: setBestworst, timeframe: timeframe, setTimeframe: setTimeframe, gameMode: gameMode, setGameMode: setGameMode, side: side, setSide: setSide }} />
                    
                    {
                        (!showLoading || heroesToShow.length > 0)
                        ?
                            
                            heroesToShow.length > 0
                            ?
                            heroesToShow.map(heroToShow => (
                                <HeroSummary key={heroToShow.name} 
                                props={{ 
                                    id: heroToShow.id,
                                    name: heroToShow.name,
                                    localized_name: heroToShow.localized_name, 
                                    img: heroToShow.img, 
                                    win: heroToShow.win, 
                                    loss: heroToShow.loss, 
                                    kills_avg: heroToShow.kills_avg,
                                    deaths_avg: heroToShow.deaths_avg,
                                    assists_avg: heroToShow.assists_avg,
                                    hero_damage_avg: heroToShow.hero_damage_avg,
                                    tower_damage_avg: heroToShow.tower_damage_avg,
                                    games_match_data: heroToShow.games_match_data 
                                }} />
                            ))
                            :
                            <Container sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography
                                    sx={{
                                        fontWeight: 'bold', 
                                        paddingTop: '48px',
                                        marginRight: '12px',
                                        fontSize: '22px',
                                        color: theme.text
                                    }}
                                >
                                    No Matches
                                </Typography>
                            </Container>
                        :
                        <Container sx={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box 
                                component="img"
                                sx={{
                                    paddingTop: "10%",
                                    height: 256,
                                    width: 256,
                                }}
                                alt="loading icon"
                                src={loading}
                            />
                        </Container>
                    }

                </Stack>

            </Container>

        </Container>
    );
}