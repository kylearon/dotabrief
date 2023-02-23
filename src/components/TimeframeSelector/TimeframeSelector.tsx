
import { Stack, useTheme, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { THIS_PATCH, LAST_MONTH, LAST_100 } from '../../utils/constants';
import { getToggleButtonGroupSizeForWidthMode, getFontSizeForWidthMode, getFontWeightForWidthMode } from '../../utils/utils';

export interface TimeframeSelectorProps {
    timeframe: string;
    setTimeframe: Function;
    widthMode: string; 
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
                paddingTop: '12px',
                paddingBottom: '12px',
            }}>


            <Stack 
                direction="column" 
                spacing={0}
                sx={{
                    height: 'fit-content',
                    bgcolor: theme.headerBody,
                    paddingTop: '0px'
                }}>

                <Typography
                    textAlign="left"
                    sx={{
                        fontWeight: 'bold', 
                        paddingTop: '0px',
                        fontSize: '10px',
                        paddingLeft: '4px',
                        color: theme.textLighter
                    }}
                >
                    WHEN
                </Typography>

            
                <ToggleButtonGroup
                    value={props.timeframe}
                    exclusive
                    onChange={(e) => onTimeframeToggleChange(e)}
                    aria-label="Platform"
                    sx={{
                        height: 36
                    }}
                    size={getToggleButtonGroupSizeForWidthMode(props.widthMode)}
                >

                    <ToggleButton 
                        sx={{ 
                            fontSize: getFontSizeForWidthMode(props.widthMode),
                            fontWeight: getFontWeightForWidthMode(props.widthMode), 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            },
                            "&:hover": {
                                color: theme.text,
                                backgroundColor: theme.headerBodyAlternate
                            },
                            color: theme.text
                        }} 
                        value={THIS_PATCH}
                    >
                        This Patch
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            fontSize: getFontSizeForWidthMode(props.widthMode),
                            fontWeight: getFontWeightForWidthMode(props.widthMode),
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            },
                            "&:hover": {
                                color: theme.text,
                                backgroundColor: theme.headerBodyAlternate
                            },
                            color: theme.text
                        }} 
                        value={LAST_MONTH}
                    >
                        Last Month
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            fontSize: getFontSizeForWidthMode(props.widthMode),
                            fontWeight: getFontWeightForWidthMode(props.widthMode),
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            },
                            "&:hover": {
                                color: theme.text,
                                backgroundColor: theme.headerBodyAlternate
                            },
                            color: theme.text
                        }} 
                        value={LAST_100}
                    >
                        Last 100
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>

        </Stack>
        
    )
}