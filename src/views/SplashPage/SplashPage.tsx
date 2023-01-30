
import { Container, Stack, Box, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import SplashLogin from '../../components/SplashLogin/SplashLogin'

export interface SplashPageProps {
    setSteamId: (id:string) => void
}

export default function SplashPage({props} : {props: SplashPageProps}) {

    const theme = useTheme();

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body }}>

            <Container maxWidth="lg" sx={{  }}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ userId: '', setSteamId: props.setSteamId }}  />

                    <Box sx={{ display: 'flex', height: '50vh', justifyContent: 'center', alignItems: 'center' }}>
                        <SplashLogin setSteamId={props.setSteamId} />
                    </Box>
                    
                </Stack>

            </Container>

        </Container>
    );
  }
  