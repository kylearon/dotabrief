
import { Stack, useTheme } from '@mui/material';

import React from 'react';

import BestWorstSelector from '../BestWorstSelector/BestWorstSelector';
import GameModeSelector from '../GameModeSelector/GameModeSelector';
import RadiantDireSelector from '../RadiantDireSelector/RadiantDireSelector';
import TimeframeSelector from '../TimeframeSelector/TimeframeSelector';

import { useViewport } from '../../hooks/useViewport';
import { BREAKPOINT_MEDIUM, BREAKPOINT_SMALL } from '../../utils/constants';

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

    // const { viewportWidth } = useViewport();

    return (

        // viewportWidth > BREAKPOINT_MEDIUM
        // ?
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                bgcolor: theme.headerBody,
                paddingLeft: "12px",
                flexWrap: "wrap",
            }}>

            <BestWorstSelector props={{ bestworst: props.bestworst, setBestworst: props.setBestworst, widthMode: "large" }} />

            <GameModeSelector props={{ gameMode: props.gameMode, setGameMode: props.setGameMode, widthMode: "large" }} />

            <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe, widthMode: "large"}} />

            <RadiantDireSelector props={{side: props.side, setSide: props.setSide, widthMode: "large"}} />

        </Stack>
        // :
        //     viewportWidth <= BREAKPOINT_MEDIUM && viewportWidth > BREAKPOINT_SMALL
        //     ?
        //     <Stack 
        //         direction="row" 
        //         spacing={2}
        //         sx={{
        //             bgcolor: theme.headerBody,
        //             paddingLeft: "12px"
        //         }}>

        //         <BestWorstSelector props={{ bestworst: props.bestworst, setBestworst: props.setBestworst, widthMode: "small" }} />

        //         <GameModeSelector props={{ gameMode: props.gameMode, setGameMode: props.setGameMode, widthMode: "small" }} />

        //         <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe, widthMode: "small"}} />

        //         <RadiantDireSelector props={{side: props.side, setSide: props.setSide, widthMode: "small"}} />

        //     </Stack>
        //     :

        //     <Stack 
        //         direction="column" 
        //         spacing={0}
        //         sx={{
                    
        //         }}>

        //         <Stack 
        //             direction="row" 
        //             spacing={2}
        //             sx={{
        //                 bgcolor: theme.headerBody,
        //                 paddingLeft: "12px"
        //             }}>

        //             <BestWorstSelector props={{ bestworst: props.bestworst, setBestworst: props.setBestworst, widthMode: "small" }} />

        //             <GameModeSelector props={{ gameMode: props.gameMode, setGameMode: props.setGameMode, widthMode: "small" }} />

        //         </Stack>

        //         <Stack 
        //             direction="row" 
        //             spacing={2}
        //             sx={{
        //                 bgcolor: theme.headerBody,
        //                 paddingLeft: "24px",
        //             }}>

        //             <TimeframeSelector props={{timeframe: props.timeframe, setTimeframe: props.setTimeframe, widthMode: "small"}} />

        //             <RadiantDireSelector props={{side: props.side, setSide: props.setSide, widthMode: "small"}} />

        //         </Stack>

        //     </Stack>
        
        
    )
}