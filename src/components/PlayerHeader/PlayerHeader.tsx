
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { PlayerData, ProfileData, WinLossData } from '../../hooks/useFetch';
import TimeframeSelector from '../TimeframeSelector/TimeframeSelector';
import WinLoss from '../WinLoss/WinLoss';
import WinRate from '../WinRate/WinRate';

export interface PlayerHeaderProps {
    playerData: PlayerData | undefined;
    winLossData: WinLossData | undefined;
    timeframe: string;
    setTimeframe: Function;
}

export default function PlayerHeader({props} : {props: PlayerHeaderProps}) {

    const theme = useTheme();

    let win = 0;
    let loss = 0;
    let winRate = 0.0;
    if(props.winLossData) {
        win = props.winLossData.win
        loss = props.winLossData.lose;
        winRate = (win / (win + loss)) * 100;
    }
    let winRateString = winRate.toFixed(2) + "%";

    let imgSrc = "";
    let heroName = "";
    if(props.playerData) {
        imgSrc = props.playerData.profile.avatarfull;
        heroName = props.playerData.profile.personaname;
    }

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                bgcolor: theme.headerBody
            }}>

            <Box
                component="img"
                sx={{
                    height: 64,
                    width: 64
                }}
                alt="avatar icon"
                src={imgSrc}
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
                {heroName}
            </Typography>

            <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe}} />

            <WinLoss props={{ win: win, loss: loss }} />

            <WinRate props={{ rate: winRateString }} />

        </Stack>
        
    )
}