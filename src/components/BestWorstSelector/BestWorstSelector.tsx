
import { Stack, useTheme, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { BEST_HEROES, WORST_HEROES } from '../../utils/constants';

export interface BestWorstSelectorProps {
    bestworst: string
    setBestworst: Function
}

export default function BestWorstSelector({props} : {props: BestWorstSelectorProps}) {

    const theme = useTheme();

    const onButtonClicked: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement; 
        props.setBestworst(target.value);
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
                paddingLeft: '12px'
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
                    WHO
                </Typography>


                <ToggleButtonGroup
                    value={props.bestworst}
                    exclusive
                    onClick={(e) => onButtonClicked(e)}
                    aria-label="Platform"
                    sx={{
                        height: 36
                    }}
                >
                    <ToggleButton 
                        sx={{ 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={BEST_HEROES}
                    >
                        Best Heroes
                    </ToggleButton>
                    <ToggleButton 
                        sx={{ 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={WORST_HEROES}
                    >
                        Worst Heroes
                    </ToggleButton>
                </ToggleButtonGroup>
                
            </Stack>

{/* 
            <Button 
                variant={props.bestworst === BEST_HEROES ? "contained" : "outlined"}
                color="info"
                onClick={(e) => onButtonClicked(e)}
                data-bestworst={BEST_HEROES}
                sx={{
                    width: '160px'
                }}>
                Best Heroes
            </Button>

            <Button 
                variant={props.bestworst === WORST_HEROES ? "contained" : "outlined"}
                color="info"
                onClick={(e) => onButtonClicked(e)}
                data-bestworst={WORST_HEROES}
                sx={{
                    width: '160px'
                }}>
                Worst Heroes
            </Button> */}

        </Stack>
        
    )
}