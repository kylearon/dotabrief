
import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTimeStringFromISO } from '../../utils/utils';

export interface PlayerEntryFromSearchProps {
    account_id: number;
    personaname: string;
    avatarfull: string;
    last_match_time: string;
}

export default function PlayerEntryFromSearch({props} : {props: PlayerEntryFromSearchProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    // const onButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    const onPlayerEntryclick: MouseEventHandler<HTMLDivElement> = (e) => {
        navigate("/player/" + props.account_id);
    }
    
    return (
        <Stack 
            direction="row" 
            spacing={2}
            onClick={(e) => onPlayerEntryclick(e)}
            sx={{
                height: '64px',
                width: '1152px',
                bgcolor: theme.headerBody,
                paddingTop: '0px',
                "&:hover": {
                    bgcolor: theme.headerBodyHover, 
                },
                cursor: 'pointer'
            }}>

            <Box
                component="img"
                sx={{
                    height: 64,
                    width: 64
                }}
                alt="avatar icon"
                src={props.avatarfull}
            />

            <Stack 
                direction="column" 
                spacing={0}
                sx={{
                    height: 'fit-content',
                    bgcolor: theme.transparent,
                    paddingTop: '4px'
                }}>

                <Typography
                    textAlign="left"
                    sx={{
                        fontWeight: 'bold', 
                        paddingTop: '0px',
                        width: '800px',
                        fontSize: '22px',
                        color: theme.text
                    }}
                >
                    {props.personaname}
                </Typography>

                <Typography
                    textAlign="left"
                    sx={{
                        fontWeight: 'normal', 
                        paddingTop: '0px',
                        width: '800px',
                        fontSize: '10px',
                        color: theme.text
                    }}
                >
                    {
                        props.last_match_time
                        ?
                        "last played " + getTimeStringFromISO(props.last_match_time)
                        :
                        ""
                    }
                </Typography>
            

            </Stack>

        </Stack>
        
    )
}