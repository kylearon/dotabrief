
import { Stack, useTheme, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { THIS_PATCH, LAST_MONTH, LAST_100 } from '../../utils/constants';

export interface TimeframeSelectorProps {
    timeframe: string;
    setTimeframe: Function;
}

export default function TimeframeSelector({props} : {props: TimeframeSelectorProps}) {

    const theme = useTheme();

    const onTimeframeToggleChange: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement;
        // console.log(target.value);
        props.setTimeframe(target.value);
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

            
            <ToggleButtonGroup
                value={props.timeframe}
                exclusive
                onChange={(e) => onTimeframeToggleChange(e)}
                aria-label="Platform"
                sx={{
                    height: 36,
                    width: 360
                }}
            >

                <ToggleButton 
                    sx={{ 
                        width: 120,
                        "&.Mui-selected, &.Mui-selected:hover": {
                            color: "white",
                            backgroundColor: theme.headerButtonBackground
                        }
                    }} 
                    value={THIS_PATCH}
                >
                    This Patch
                </ToggleButton>

                <ToggleButton 
                    sx={{ 
                        width: 120,
                        "&.Mui-selected, &.Mui-selected:hover": {
                            color: "white",
                            backgroundColor: theme.headerButtonBackground
                        }
                    }} 
                    value={LAST_MONTH}
                >
                    Last Month
                </ToggleButton>

                <ToggleButton 
                    sx={{ 
                        width: 120,
                        "&.Mui-selected, &.Mui-selected:hover": {
                            color: "white",
                            backgroundColor: theme.headerButtonBackground
                        }
                    }} 
                    value={LAST_100}
                >
                    Last 100
                </ToggleButton>

            </ToggleButtonGroup>

        </Stack>
        
    )
}