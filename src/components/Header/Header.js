import { Container, Stack, useTheme } from '@mui/material';

import Typography from '@mui/material/Typography';

export default function Header() {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: '60px',
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
                dotabrief
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold', 
                    paddingLeft: '10px',
                    paddingTop: '20px',
                    color: theme.text
                }}
            >
                your personal dota recommendation engine
            </Typography>

        </Stack>

        
    )
}