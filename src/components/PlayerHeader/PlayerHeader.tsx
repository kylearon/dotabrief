
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { PlayerData, ProfileData } from '../../hooks/useFetch';


export default function PlayerHeader({playerData} : {playerData: PlayerData}) {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold', 
                    paddingLeft: '10px',
                    color: theme.text
                }}
            >
                icon
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold', 
                    paddingTop: '20px',
                    width: '100%',
                    color: theme.text
                }}
            >
                username
            </Typography>

        </Stack>
        
    )
}