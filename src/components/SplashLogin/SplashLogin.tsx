
import { Typography, Stack, TextField, Box, useTheme } from '@mui/material';


import { KeyboardEventHandler, useState } from 'react';
import PlayerEntryFromSearch from '../PlayerEntryFromSearch/PlayerEntryFromSearch';
import { PLAYERS_URL, SEARCH_FOR_PLAYER_URL } from '../../utils/constants';

import { useCookies } from 'react-cookie';
import { PlayerData } from '../../hooks/useFetch';
import PlayerEntryFromHistory from '../PlayerEntryFromHistory/PlayerEntryFromHistory';

export interface PlayerSearchEntry {
    account_id: number;
    personaname: string;
    avatarfull: string;
    last_match_time: string;
}

export default function SplashLogin({setSteamId} : {setSteamId: (id:string) => void}) {

    const theme = useTheme();

    const [steamIdError, setSteamIdError] = useState<boolean>(false);

    const [playerSearchEntries, setPlayerSearchEntries] = useState<PlayerSearchEntry[]>([]);

    const [cookies, setCookie, removeCookie] = useCookies(['steamIds']);

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

        //update the error style on keypress
        if(steamIdError) {
            setSteamIdError(false);
        }

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

                        //try to search for this value as a player name
                        fetch(SEARCH_FOR_PLAYER_URL + target.value).then( (playerNameResponse) => {
                            if (!playerNameResponse.ok) {
                                console.log("ERROR: " + playerNameResponse.status + " " + playerNameResponse.statusText);
                            }

                            //return the Promise for the json response
                            return playerNameResponse.json();
                        }).then((playerNameData: PlayerSearchEntry[]) => { //read the json response Promise
                            console.log("playerNameData");
                            console.log(playerNameData);

                            //remove any that don't play dota so don't have a last_match_time
                            const filteredPlayerNameData = playerNameData.filter(entry => entry.last_match_time);

                            //only show the top ten entries
                            if(playerNameData.length > 10) {
                                setPlayerSearchEntries(filteredPlayerNameData.slice(0, 10));
                            }
                            else {
                                setPlayerSearchEntries(filteredPlayerNameData);
                            }
                        });
                        
                        //show error on page
                        // setSteamIdError(true);
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
        <Stack spacing={2} sx={{ paddingTop: "12px" }}>

            {
                (Object.values<PlayerData>(cookies['steamIds']).length > 0)
                ?
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'normal',
                            color: theme.text
                        }}
                    >
                        Dotabrief History
                    </Typography>
                </Box>
                :
                <></>
            }

            {
                Object.values<PlayerData>(cookies['steamIds']).map(value => 
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <PlayerEntryFromHistory props={{ account_id: value.profile.account_id, personaname: value.profile.personaname, avatarfull: value.profile.avatarfull }} />
                    </Box>
                )
            }

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                    variant="h5"
                    sx={{
                        paddingTop: "12px",
                        fontWeight: 'normal',
                        color: theme.text
                    }}
                >
                    Search Steam Name
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <TextField 
                    id="outlined-basic" 
                    label="steam name or player id" 
                    variant="outlined"
                    sx={{
                        fontSize: '16px',
                        fontWeight: 'normal',
                        width: '40ch'
                    }}
                    onKeyPress={onKeyPress}
                    error={steamIdError}
                    helperText={steamIdError ? "Incorrect ID. Use the same ID you would find in your dotabuff profile url." : ""}
                />
            </Box>

            {
                playerSearchEntries.map(entry => 
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <PlayerEntryFromSearch props={{ account_id: entry.account_id, personaname: entry.personaname, avatarfull: entry.avatarfull, last_match_time: entry.last_match_time }} />
                    </Box>
                )
            }
            
        </Stack>

    )
}
