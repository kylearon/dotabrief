import { Container, Stack, Box, useTheme } from '@mui/material';

import { useState } from 'react';

import Header from '../../components/Header/Header'


export default function MainPage({steamId} : {steamId: string}) {
    
    const theme = useTheme();

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header userId={steamId} />
                    
                </Stack>

            </Container>

        </Container>
    );
}