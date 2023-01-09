
import { Container, Stack, Box, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import SplashLogin from '../../components/SplashLogin/SplashLogin'


export default function SplashPage({setSteamId}) {

    const theme = useTheme();

    return (
        <Container maxWidth="" sx={{ bgcolor: theme.body }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header />

                    <Box sx={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
                        <SplashLogin setSteamId={setSteamId} />
                    </Box>
                    
                </Stack>

            </Container>

        </Container>
    );
  }
  