
import { Stack, useTheme, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { SIDE_RADIANT, SIDE_DIRE, SIDE_BOTH } from '../../utils/constants';

export interface RadiantDireSelectorProps {
    side: string;
    setSide: Function;
}

export default function RadiantDireSelector({props} : {props: RadiantDireSelectorProps}) {

    const theme = useTheme();

    const onRadiantDireToggleChange: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement;
        // console.log(target.value);
        props.setSide(target.value);
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
                        color: theme.text
                    }}
                >
                    WHERE
                </Typography>

            
                <ToggleButtonGroup
                    value={props.side}
                    exclusive
                    onChange={(e) => onRadiantDireToggleChange(e)}
                    aria-label="Platform"
                    sx={{
                        height: 36
                    }}
                >

                    <ToggleButton 
                        sx={{ 
                            width: 80,
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={SIDE_RADIANT}
                    >
                        Radiant
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            width: 80,
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={SIDE_DIRE}
                    >
                        Dire
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            width: 80,
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={SIDE_BOTH}
                    >
                        Both
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>

        </Stack>
        
    )
}