
import { Typography, Stack, TextField, Box, useTheme } from '@mui/material';


import { KeyboardEventHandler } from 'react';

export default function SplashLogin({setSteamId} : {setSteamId: (id:string) => void}) {

    const theme = useTheme();

    const onKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {

        //have to cast the target as a type to get its value
        const target = e.target as HTMLInputElement;

        if (e.key === "Enter") {
            console.log('Input value', target.value);
            e.preventDefault();

            if(target.value) {
                //set the with the provided callback
                setSteamId(target.value);
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