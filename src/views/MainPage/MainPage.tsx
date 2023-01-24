
import { Container, Stack, Box, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import HeroSummary, { HeroSummaryProps } from '../../components/HeroSummary/HeroSummary';
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import { useFetchMatches, useFetchPlayer, useFetchWinLoss } from '../../hooks/useFetch';
import { dotaconstants, GAME_MODE_TURBO_URL_PARAM, THIS_PATCH, TIMEFRAME_PARAM_MAP } from '../../utils/constants';
import { getHeroesToShowFromMatchData, getHeroIconFromId, getHeroIconFromName, getHeroLocalizedNameFromId, getHeroLocalizedNameFromName, HeroMatchData } from '../../utils/utils';

function getTimeframeParam(timeframe: string): string {
    const timeframeParam = TIMEFRAME_PARAM_MAP.get(timeframe);
    return timeframeParam ? timeframeParam : "";
}

export default function MainPage({steamId} : {steamId: string}) {
    
    const theme = useTheme();

    const [timeframe, setTimeframe] = useState<string>(THIS_PATCH);
    
    //load the heros to show
    const [ heroesToShow, setHeroesToShow ] = useState<HeroSummaryProps[]>( [] );


    //load the player data
    const { playerData, playerDataError } = useFetchPlayer(steamId);

    //load the win/loss data based on the timeframe
    const { winLossData, winLossError } = useFetchWinLoss(steamId, getTimeframeParam(timeframe), GAME_MODE_TURBO_URL_PARAM);

    //load the match data from the timeframe
    const { matchesData, matchesError } = useFetchMatches(steamId, getTimeframeParam(timeframe), GAME_MODE_TURBO_URL_PARAM);


    useEffect(() => {
        console.log("timeframe changed");
        console.log(timeframe);
    },[timeframe]);

    useEffect(() => {
        console.log("player data changed");
        console.log(playerData);
    },[playerData]);

    useEffect(() => {
        console.log("win/loss data changed");
        console.log(winLossData);
    },[winLossData]);

    useEffect(() => {
        console.log("win/loss data changed");
        console.log(matchesData);

        let newHeroesToShow: HeroSummaryProps[] = [];
        if(matchesData) {
            let heroesToShowMatchData = getHeroesToShowFromMatchData(matchesData);
            heroesToShowMatchData.forEach((value: HeroMatchData, index: number, array: HeroMatchData[]) => {
                newHeroesToShow.push({ name: getHeroLocalizedNameFromId(value.heroId), win: value.win, loss: value.lose, img: getHeroIconFromId(value.heroId) });
            });

            setHeroesToShow(newHeroesToShow);
        }
    },[matchesData]);


    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header userId={playerData ? playerData.profile.personaname : "undefined"} />

                    {
                        playerData && winLossData
                        ?
                        <PlayerHeader props={{playerData: playerData, winLossData: winLossData, timeframe: timeframe, setTimeframe: setTimeframe}}/>
                        :
                        <></>
                    }
                    
                    {
                        heroesToShow.map(heroToShow => (
                            <HeroSummary props={{ name: heroToShow.name, img: heroToShow.img, win: heroToShow.win, loss: heroToShow.loss }} />
                        ))
                    }


                </Stack>

            </Container>

        </Container>
    );
}