
import { Stack, useTheme, Typography, Box } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCookies } from 'react-cookie';

export interface PlayerEntryProps {
    account_id: number;
    personaname: string;
    avatarfull: string;
}

export default function PlayerEntry({props} : {props: PlayerEntryProps}) {

    const theme = useTheme();

    const navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['steamIds']);

    // const onButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
    const onPlayerEntryClick: MouseEventHandler<HTMLDivElement> = (e) => {
        navigate("/player/" + props.account_id);
    }

    const onRemoveEntryClick: MouseEventHandler<HTMLDivElement> = (e) => {
        
        //clone the current steamIds cookie into a new object which will be modified
        var clone = Object.assign({}, cookies['steamIds']);

        //delete the cookie for this player from the clone
        delete clone[props.account_id];

        //save the steamIds cookie back
        setCookie('steamIds', clone, { path: '/' });
    }
    
    return (
        <Stack 
            direction="row" 
            spacing={0}
            
            sx={{
                cursor: 'pointer'
            }}>


            <Stack 
                direction="row" 
                spacing={2}
                onClick={(e) => onPlayerEntryClick(e)}
                sx={{
                    display: 'flex',
                    height: '64px',
                    width: '1088px',
                    backgroundColor: theme.headerBody,
                    paddingTop: '0px',
                    "&:hover": {
                        backgroundColor: theme.headerBodyHover, 
                    }
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
                        backgroundColor: theme.transparent,
                        paddingTop: '2px'
                    }}>

                    <Typography
                        textAlign="left"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '12px',
                            width: 'fill',
                            fontSize: '22px',
                            color: theme.text
                        }}
                    >
                        {props.personaname}
                    </Typography>
                

                </Stack>

            </Stack>

            <Box
                    component="div"
                    sx={{
                        height: 64,
                        width: 64,
                        justifyContent: 'center',
                        backgroundColor: theme.deleteButton,
                        "&:hover": {
                            backgroundColor: theme.deleteButtonHover, 
                        }
                    }}
                    onClick={(e) => onRemoveEntryClick(e)}
                >
                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '14px',
                            width: 'fill',
                            fontSize: '22px',
                            color: theme.text
                        }}
                    >
                        X
                    </Typography>
                </Box>

        </Stack>
        
    )
}