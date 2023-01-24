
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { PlayerData, ProfileData, WinLossData } from '../../hooks/useFetch';
import BestWorstSelector from '../BestWorstSelector/BestWorstSelector';

export interface FilterBarProps {
    bestworst: string
    setBestworst: Function
}

export default function FilterBar({props} : {props: FilterBarProps}) {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                bgcolor: theme.headerBody
            }}>

            <BestWorstSelector props={{ bestworst: props.bestworst, setBestworst: props.setBestworst }} />

        </Stack>
        
    )
}