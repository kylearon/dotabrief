
import { Typography, Stack, TextField } from '@mui/material';

export default function SplashLogin() {

    return (
        <Stack spacing={2} >
                <Typography
                    variant="h5"
                    css={{
                    fontWeight: 'bold',
                    paddingLeft: '10px',
                    }}
                >
                    Please Enter your Steam ID to continue
                </Typography>
                <TextField 
                    id="outlined-basic" 
                    label="steam id" 
                    variant="outlined"
                    css={{
                        fontWeight: 'normal',
                        paddingLeft: '10px',
                        width: '200px'
                        }}
                
                />
        </Stack>

    )
}