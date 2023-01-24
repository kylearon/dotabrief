
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

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