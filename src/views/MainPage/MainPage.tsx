import { Container, Stack, Box, useTheme } from '@mui/material';

import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header'
import PlayerHeader from '../../components/PlayerHeader/PlayerHeader';
import { useFetchPlayer } from '../../hooks/useFetch';


export default function MainPage({steamId} : {steamId: string}) {
    
    const theme = useTheme();

    const [timeframe, setTimeframe] = useState("THIS_PATCH");

    //load the player data
    const { playerData, error } = useFetchPlayer();


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
                        playerData
                        ?
                        <PlayerHeader props={{playerData: playerData, timeframe: timeframe, setTimeframe: setTimeframe}}/>
                        :
                        <></>
                    }
                    
                </Stack>

            </Container>

        </Container>
    );
}