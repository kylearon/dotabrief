
import { Container, Stack, Box, useTheme, Button, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

export interface WinLossProps {

}

export default function WinLoss({props} : {props: WinLossProps}) {

    const theme = useTheme();

    
    return (
        <Stack 
            direction="column" 
            spacing={0}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody,
                paddingTop: '12px'
            }}>

            <Typography
                textAlign="center"
                sx={{
                    fontWeight: 'bold', 
                    paddingTop: '0px',
                    width: '120px',
                    fontSize: '14px',
                    color: theme.text
                }}
            >
                Win - Loss
            </Typography>

            <Stack 
                direction="row" 
                spacing={0}
                sx={{
                    height: 'fit-content',
                    bgcolor: theme.headerBody,
                    paddingTop: '0px'
                }}>

                    <Typography
                        textAlign="right"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            width: '50px',
                            fontSize: '14px',
                            color: theme.winColor
                        }}
                    >
                        40
                    </Typography>

                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            paddingLeft: '4px',
                            width: '8px',
                            fontSize: '14px',
                            color: theme.text
                        }}
                    >
                        -
                    </Typography>

                    <Typography
                        textAlign="left"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            paddingLeft: '4px',
                            width: '50px',
                            fontSize: '14px',
                            color: theme.lossColor
                        }}
                    >
                        35
                    </Typography>


            </Stack>


        </Stack>
        
    )
}