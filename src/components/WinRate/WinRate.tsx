
import { Container, Stack, Box, useTheme, Button, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

export interface WinRateProps {

}

export default function WinRate({props} : {props: WinRateProps}) {

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
                    width: '100px',
                    fontSize: '14px',
                    color: theme.text
                }}
            >
                Win Rate
            </Typography>

            <Typography
                textAlign="center"
                sx={{
                    fontWeight: 'bold', 
                    paddingTop: '0px',
                    width: '100px',
                    fontSize: '14px',
                    color: theme.text
                }}
            >
                55%
            </Typography>

        </Stack>
        
    )
}