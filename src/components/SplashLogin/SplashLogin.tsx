
import { Typography, Stack, TextField, Box, useTheme } from '@mui/material';


import { KeyboardEventHandler } from 'react';
import { PLAYERS_URL } from '../../utils/constants';

export default function SplashLogin({setSteamId} : {setSteamId: (id:string) => void}) {

    const theme = useTheme();

    // const handleClick = async () => {
    //     await fetch(URL_TO_FETCH,{ 
    //       method: 'GET', 
    //       credentials: 'include', 
    //       headers: new Headers({ 'content-type': 'application/json' }),
    //       body: JSON.stringify({ data: { myId: "123" } })
    //     });
    //     navigate("/");
    //   };

    const onKeyPress: KeyboardEventHandler<HTMLDivElement> = async (e) => {

        //have to cast the target as a type to get its value
        const target = e.target as HTMLInputElement;

        if (e.key === "Enter") {
            console.log('Input value', target.value);
            e.preventDefault();

            if(target.value) {

                //generate the full url with the player id
                const fullUrl = PLAYERS_URL + target.value;

                //fetch the player info
                //use .then() with the Promise returned by fetch to get the response
                fetch(PLAYERS_URL + target.value).then( (response) => {
                    // console.log("SUCCESS");
                    // console.log(response);

                    //log a bad response to the console. like 404 etc
                    if (!response.ok) {
                        console.log("ERROR: " + response.status + " " + response.statusText);
                        //TODO: show error on page?
                        return;
                    }

                    //set the steam id state which causes react to render the main page
                    setSteamId(target.value);

                } ).catch ( (error) => {
                    console.log("REJECTED");
                    console.log(error);
                    //TODO: show error on page?
                });
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