
import { Stack, useTheme, Button } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import { BEST_HEROES, WORST_HEROES } from '../../utils/constants';

export interface BestWorstSelectorProps {
    bestworst: string
    setBestworst: Function
}

export default function BestWorstSelector({props} : {props: BestWorstSelectorProps}) {

    const theme = useTheme();

    const onButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        // console.log("on click handler")
        // console.log(e);

        const target = e.target as HTMLButtonElement; 
        props.setBestworst(target.getAttribute("data-bestworst"));
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
            </Button>

        </Stack>
        
    )
}