
import { Typography, Stack, TextField, Box, useTheme } from '@mui/material';

export default function SplashLogin({setSteamId}) {

    const theme = useTheme();

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log('Input value', e.target.value);
            e.preventDefault();

            if(e.target.value) {
                setSteamId(e.target.value);
            }          
        }
    }

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
                        fontSize: '16px',
                        fontWeight: 'normal',
                        width: '40ch'
                    }}
                    onKeyPress={onKeyPress}
                />
            </Box>

        </Stack>

    )
}