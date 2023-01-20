
import { Container, Stack, Box, useTheme, Button } from '@mui/material';

import React, { MouseEventHandler } from 'react';

export interface TimeframeSelectorProps {
    timeframe: string;
    setTimeframe: Function;
}

export default function TimeframeSelector({props} : {props: TimeframeSelectorProps}) {

    const theme = useTheme();

    const onButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        // console.log("on click handler")
        // console.log(e);

        const target = e.target as HTMLButtonElement; 
        props.setTimeframe(target.getAttribute("data-timeframe"));
    }

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody,
                paddingTop: '12px'
            }}>

            <Button 
                variant={props.timeframe === "THIS_PATCH" ? "contained" : "outlined"}
                color="info"
                onClick={(e) => onButtonClicked(e)}
                data-timeframe="THIS_PATCH"
                sx={{
                    width: '128px'
                }}>
                This Patch
            </Button>

            <Button 
                variant={props.timeframe === "LAST_MONTH" ? "contained" : "outlined"}
                color="info"
                onClick={(e) => onButtonClicked(e)}
                data-timeframe="LAST_MONTH"
                sx={{
                    width: '128px'
                }}>
                Last Month
            </Button>

            <Button 
                variant={props.timeframe === "LAST_100" ? "contained" : "outlined"}
                color="info"
                onClick={(e) => onButtonClicked(e)}
                data-timeframe="LAST_100"
                sx={{
                    width: '128px'
                }}>
                Last 100
            </Button>

        </Stack>
        
    )
}