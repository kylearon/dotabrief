
import { Container, Stack, Box, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import SplashLogin from '../../components/SplashLogin/SplashLogin'

import { useViewport } from '../../hooks/useViewport';

export interface SplashPageProps {
    setSteamId: (id:string) => void
    lightDarkMode: string
    setLightDarkMode: Function
}

export default function SplashPage({props} : {props: SplashPageProps}) {

    const theme = useTheme();

    const { viewportWidth } = useViewport();
    const mobileBreakpoint = 910;

    return (
        <Container maxWidth={false} sx={{ bgcolor: theme.body, overflowY: "scroll" }} disableGutters={viewportWidth < mobileBreakpoint}>

            <Container maxWidth="lg" sx={{  }} disableGutters={viewportWidth < mobileBreakpoint}>

                <Stack spacing={2} sx={{ height: '100vh', width: 'fill' }}>

                    <Header props={{ userId: '', setSteamId: props.setSteamId, lightDarkMode: props.lightDarkMode, setLightDarkMode: props.setLightDarkMode }}  />

                    <SplashLogin props={{ setSteamId: props.setSteamId  }} />

                    
                </Stack>

            </Container>

        </Container>
    );
  }
  