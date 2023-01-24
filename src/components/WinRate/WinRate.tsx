
import { Stack, useTheme, Typography } from '@mui/material';

import React from 'react';

export interface WinRateProps {
    rate: string
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
                {props.rate}
            </Typography>

        </Stack>
        
    )
}