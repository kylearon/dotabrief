
import { Stack, Box, useTheme } from '@mui/material';

import React from 'react';

import Typography from '@mui/material/Typography';
import { STEAM_CDN_URL } from '../../utils/constants';

export interface HeroSummaryProps {
    name: string
    win: number
    loss: number
    img: string
    kills_avg: number
    deaths_avg: number
    assists_avg: number
    hero_damage_avg: number
    tower_damage_avg: number
}

export default function HeroSummary({props} : {props: HeroSummaryProps}) {

    const theme = useTheme();

    const imgSrc = STEAM_CDN_URL + props.img;

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
                        width: '140px',
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
                        paddingTop: '6px'
                    }}>

                        <Typography
                            textAlign="right"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '1px',
                                width: '30px',
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
                                width: '20px',
                                fontSize: '14px',
                                color: theme.lossColor
                            }}
                        >
                            {props.loss}
                        </Typography>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                paddingLeft: '4px',
                                width: '60px',
                                fontSize: '14px',
                                color: theme.text
                            }}
                        >
                            {(props.win / (props.win + props.loss) * 100).toFixed(2) + '%'}
                        </Typography>

                </Stack>

            </Stack>


            
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
                        width: '140px',
                        fontSize: '14px',
                        color: theme.text
                    }}
                >
                    Avg KDA
                </Typography>

                <Stack 
                    direction="row" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        bgcolor: theme.headerBody,
                        paddingTop: '6px'
                    }}>

                        <Typography
                            textAlign="right"
                            sx={{
                                fontWeight: 'bold', 
                                paddingLeft: '20px',
                                paddingTop: '1px',
                                width: '30px',
                                fontSize: '14px',
                                color: theme.winColor
                            }}
                        >
                            {props.kills_avg}
                        </Typography>

                        <Typography
                            textAlign="right"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '1px',
                                width: '30px',
                                fontSize: '14px',
                                color: theme.lossColor
                            }}
                        >
                            {props.deaths_avg}
                        </Typography>

                        <Typography
                            textAlign="right"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '1px',
                                width: '30px',
                                fontSize: '14px',
                                color: theme.assistColor
                            }}
                        >
                            {props.assists_avg}
                        </Typography>

                </Stack>
            </Stack>


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
                        width: '140px',
                        fontSize: '14px',
                        color: theme.text
                    }}
                >
                    Avg Hero Dmg
                </Typography>

                <Stack 
                    direction="row" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        bgcolor: theme.headerBody,
                        paddingTop: '6px'
                    }}>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                paddingLeft: '4px',
                                width: '140px',
                                fontSize: '14px',
                                color: theme.text
                            }}
                        >
                            {'dmg %'}
                        </Typography>

                </Stack>
            </Stack>

            
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
                        width: '140px',
                        fontSize: '14px',
                        color: theme.text
                    }}
                >
                    Avg Tower Dmg
                </Typography>

                <Stack 
                    direction="row" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        bgcolor: theme.headerBody,
                        paddingTop: '6px'
                    }}>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                paddingLeft: '4px',
                                width: '140px',
                                fontSize: '14px',
                                color: theme.text
                            }}
                        >
                            {'dmg %'}
                        </Typography>

                </Stack>
            </Stack>

        </Stack>
        
    )
}