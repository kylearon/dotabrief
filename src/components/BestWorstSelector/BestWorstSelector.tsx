
import { Stack, useTheme, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { BEST_HEROES, WORST_HEROES } from '../../utils/constants';
import { getToggleButtonGroupSizeForWidthMode, getFontSizeForWidthMode, getFontWeightForWidthMode } from '../../utils/utils';

export interface BestWorstSelectorProps {
    bestworst: string
    setBestworst: Function
    widthMode: string
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
                        paddingLeft: '4px',
                        fontSize: '10px',
                        color: theme.textLighter
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
                        value={BEST_HEROES}
                    >
                        Best Heroes
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