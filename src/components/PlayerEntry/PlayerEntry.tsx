
import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTimeStringFromISO } from '../../utils/utils';

export interface PlayerEntryProps {
    account_id: number;
    personaname: string;
    avatarfull: string;
    last_match_time: string;
}

export default function PlayerEntry({props} : {props: PlayerEntryProps}) {

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
                height: '40px',
                width: '280px',
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
                    height: 40,
                    width: 40
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
                    paddingTop: '2px'
                }}>

                <Typography
                    textAlign="left"
                    sx={{
                        fontWeight: 'bold', 
                        paddingTop: '0px',
                        width: '240px',
                        fontSize: '14px',
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
                        width: '240px',
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