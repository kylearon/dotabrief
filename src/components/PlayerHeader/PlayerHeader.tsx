
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { PlayerData, ProfileData } from '../../hooks/useFetch';
import TimeframeSelector from '../TimeframeSelector/TimeframeSelector';
import WinLoss from '../WinLoss/WinLoss';
import WinRate from '../WinRate/WinRate';

export interface PlayerHeaderProps {
    playerData: PlayerData;
    timeframe: string;
    setTimeframe: Function;
}

export default function PlayerHeader({props} : {props: PlayerHeaderProps}) {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Box
                component="img"
                sx={{
                    height: 64,
                    width: 64
                }}
                alt="avatar icon"
                src={props.playerData.profile.avatarfull}
            />

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold', 
                    paddingTop: '16px',
                    width: '200px',
                    color: theme.text
                }}
            >
                {props.playerData.profile.personaname}
            </Typography>

            <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe}} />

            <WinLoss props={{  }} />

            <WinRate props={{  }} />

        </Stack>
        
    )
}