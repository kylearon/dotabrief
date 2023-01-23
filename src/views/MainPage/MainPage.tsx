import { Container, Stack, Box, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import { useFetchPlayer, useFetchWinLoss } from '../../hooks/useFetch';
import { GAME_MODE_TURBO_URL_PARAM, THIS_PATCH, TIMEFRAME_PARAM_MAP } from '../../utils/constants';

function getTimeframeParam(timeframe: string): string {
    const timeframeParam = TIMEFRAME_PARAM_MAP.get(timeframe);
    return timeframeParam ? timeframeParam : "";
}

export default function MainPage({steamId} : {steamId: string}) {
    
    const theme = useTheme();

    const [timeframe, setTimeframe] = useState(THIS_PATCH);

    //load the player data
    const { playerData, playerDataError } = useFetchPlayer(steamId);

    //load the win/loss data based on the timeframe
    const { winLossData, winLossError } = useFetchWinLoss(steamId, getTimeframeParam(timeframe), GAME_MODE_TURBO_URL_PARAM);


    useEffect(() => {
        console.log("timeframe changed");
        console.log(timeframe);
    },[timeframe]);

    useEffect(() => {
        console.log("player data changed");
        console.log(playerData);
    },[playerData]);


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
                    
                </Stack>

            </Container>

        </Container>
    );
}