
import { Container, Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { STEAM_CDN_URL } from '../../utils/constants';

export interface HeroSummaryProps {
    name: string
    win: number
    loss: number
    img: string
}

export default function HeroSummary({props} : {props: HeroSummaryProps}) {

    const theme = useTheme();

    const imgSrc = STEAM_CDN_URL + props.img;

    console.log("HeroSummary props");
    console.log(props.img);

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Box
                component="img"
                sx={{
                    height: 72,
                    width: 128
                }}
                alt="avatar icon"
                src={imgSrc}
            />


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
                        width: '120px',
                        fontSize: '14px',
                        color: theme.text
                    }}
                >
                    {props.name}
                </Typography>

                <Stack 
                    direction="row" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        bgcolor: theme.headerBody,
                        paddingTop: '0px'
                    }}>

                        <Typography
                            textAlign="right"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '1px',
                                width: '50px',
                                fontSize: '14px',
                                color: theme.winColor
                            }}
                        >
                            {props.win}
                        </Typography>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                paddingLeft: '4px',
                                width: '8px',
                                fontSize: '14px',
                                color: theme.text
                            }}
                        >
                            -
                        </Typography>

                        <Typography
                            textAlign="left"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                paddingLeft: '4px',
                                width: '50px',
                                fontSize: '14px',
                                color: theme.lossColor
                            }}
                        >
                            {props.loss}
                        </Typography>


                </Stack>


            </Stack>

            

        </Stack>
        
    )
}