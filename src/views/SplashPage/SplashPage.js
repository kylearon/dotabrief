
import { Container, Stack, useTheme } from '@mui/material';

import Header from '../../components/Header/Header'
import SplashLogin from '../../components/SplashLogin/SplashLogin'


export default function SplashPage() {

    const theme = useTheme();

    return (
        <Container maxWidth="md">
            <Stack spacing={2} sx={{ bgcolor: theme.body, height: '100vh' }}>
                <Header />
                <SplashLogin />
            </Stack>
        </Container>
    );
  }
  