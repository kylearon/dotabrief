
import { Typography, Stack, TextField, Box, useTheme } from '@mui/material';

export default function SplashLogin() {

    const theme = useTheme();

    return (
        <Stack spacing={2} >

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'normal',
                        color: theme.text
                    }}
                >
                    Please Enter your Steam ID to continue
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField 
                    id="outlined-basic" 
                    label="steam id" 
                    variant="outlined"
                    sx={{
                        fontWeight: 'normal',
                        width: '40ch'
                    }}
                />
            </Box>

        </Stack>

    )
}