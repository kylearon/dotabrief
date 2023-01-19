
import { Container, Stack, Box, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import SplashLogin from '../../components/SplashLogin/SplashLogin'


export default function SplashPage({setSteamId} : {setSteamId: (id:string) => void}) {

    const theme = useTheme();

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header userId={''}/>

                    <Box sx={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
                        <SplashLogin setSteamId={setSteamId} />
                    </Box>
                    
                </Stack>

            </Container>

        </Container>
    );
  }
  