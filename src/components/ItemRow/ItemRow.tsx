
import { Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import { getItemUrlFromId } from '../../utils/utils';

export interface ItemRowProps {
    background_color: string
    item_0: number
    item_1: number
    item_2: number
    item_3: number
    item_4: number
    item_5: number
}

export default function ItemRow({props} : {props: ItemRowProps}) {

    const theme = useTheme();

    const iconHeight = "28px";
    const iconWidth = "38px";
    const iconPaddingTop = "4px";
    const iconPaddingLeft = "1px";

    return (
        <Stack 
            direction="row" 
            spacing={0}
            sx={{
                bgcolor: props.background_color,
                paddingLeft: "24px"
            }}>

            
                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_0)}
                />

                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_1)}
                />

                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_2)}
                />

                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_3)}
                />

                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_4)}
                />

                <Box
                    component="img"
                    sx={{
                        height: iconHeight,
                        width: iconWidth,
                        paddingTop: iconPaddingTop,
                        paddingLeft: iconPaddingLeft
                    }}
                    src={getItemUrlFromId(props.item_5)}
                />


        </Stack>
        
    )
}