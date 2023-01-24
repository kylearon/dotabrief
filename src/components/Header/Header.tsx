
import { Stack, Box, useTheme, Button } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { useNavigate } from "react-router-dom";

import Typography from '@mui/material/Typography';

export default function Header({userId} : {userId: string}) {

    const theme = useTheme();

    const navigate = useNavigate();

    const onHomeButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        navigate("/");
    }


    return (
        <Stack 
            direction="row" 
            spacing={1}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Button
                onClick={(e) => onHomeButtonClicked(e)}
                sx={{
                    fontSize: '36px',
                    fontWeight: 'bold', 
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    paddingRight: '0px',
                    paddingLeft: '0px',
                    width: '230px',
                    color: theme.text
                }}
                //monospace text generated here: https://tools.picsart.com/text/font-generator/
            >
                𝚍𝚘𝚝𝚊𝚋𝚛𝚒𝚎𝚏
            </Button>

            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 'normal', 
                    paddingTop: '24px',
                    width: '400px',
                    color: theme.text
                }}
            >
                (your personal dota recommendation engine)
            </Typography>

            
            {
                userId 
                ?
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '480px' }}>
                    <Typography
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '20px',
                            marginRight: '12px',
                            fontSize: '22px',
                            color: theme.text
                        }}
                    >
                        {userId}
                    </Typography>
                </Box> 
                :
                <></>
            }

        </Stack>
        
    )
}