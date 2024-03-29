
import { Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { PlayerData, WinLossData } from '../../hooks/useFetch';
import WinLoss from '../WinLoss/WinLoss';
import WinRate from '../WinRate/WinRate';

export interface PlayerHeaderProps {
    playerData: PlayerData | undefined;
    winLossData: WinLossData | undefined;
}

export default function PlayerHeader({props} : {props: PlayerHeaderProps}) {

    const theme = useTheme();

    let win = 0;
    let loss = 0;
    let winRate = 0.0;
    if(props.winLossData) {
        win = props.winLossData.win;
        loss = props.winLossData.lose;
        if((win+loss) > 0) {
            winRate = (win / (win + loss)) * 100;
        }        
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
            spacing={1}
            data-testid="player-header-component"
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
                    width: '880px',
                    color: theme.text
                }}
            >
                {heroName}
            </Typography>

            <WinLoss props={{ win: win, loss: loss }} />

            <WinRate props={{ rate: winRateString }} />

        </Stack>
        
    )
}