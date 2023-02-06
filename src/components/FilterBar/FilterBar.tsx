
import { Stack, useTheme } from '@mui/material';

import React from 'react';

import BestWorstSelector from '../BestWorstSelector/BestWorstSelector';
import GameModeSelector from '../GameModeSelector/GameModeSelector';
import RadiantDireSelector from '../RadiantDireSelector/RadiantDireSelector';
import TimeframeSelector from '../TimeframeSelector/TimeframeSelector';

export interface FilterBarProps {
    bestworst: string
    setBestworst: Function
    timeframe: string;
    setTimeframe: Function;
    gameMode: string;
    setGameMode: Function;
    side: string;
    setSide: Function;
}

export default function FilterBar({props} : {props: FilterBarProps}) {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                bgcolor: theme.headerBody,
                paddingLeft: "12px"
            }}>

            <BestWorstSelector props={{ bestworst: props.bestworst, setBestworst: props.setBestworst }} />

            <GameModeSelector props={{ gameMode: props.gameMode, setGameMode: props.setGameMode }} />

            <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe}} />

            <RadiantDireSelector props={{side: props.side, setSide: props.setSide}} />

        </Stack>
        
    )
}