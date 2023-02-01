
import { Box, Button, Stack, useTheme } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import Typography from '@mui/material/Typography';
import { getTimeString } from '../../utils/utils';
import { DOTABUFF_MATCH_URL, OPENDOTA_MATCH_URL } from '../../utils/constants';

const dotabuffIcon: string = require("../../assets/dotabuff64x64.png");
const opendotaIcon: string = require("../../assets/opendota64x64.png");

export interface GameSummaryProps {
    match_id: string
    hero_id: number
    hero_name: string
    date: string
    img: string
    win: boolean
    kills: number
    deaths: number
    assists: number
    hero_damage: number
    tower_damage: number
    background_color: string
}

export default function GameSummary({props} : {props: GameSummaryProps}) {

    const theme = useTheme();

    const onDotabuffButtonClicked: MouseEventHandler<HTMLImageElement> = (e) => {
        window.open(DOTABUFF_MATCH_URL + props.match_id, '_blank');
    }

    const onOpendotaButtonClicked: MouseEventHandler<HTMLImageElement> = (e) => {
        window.open(OPENDOTA_MATCH_URL + props.match_id, '_blank');
    }

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: props.background_color
            }}>

                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        width: '120px',
                        height: '37px',
                        bgcolor: theme.transparent,
                        paddingTop: '0px'
                    }}>

                </Stack>


                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: '37px',
                        bgcolor: theme.transparent,
                        paddingTop: '0px'
                    }}>

                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            width: '140px',
                            fontSize: '12px',
                            color: props.win ? theme.winColor : theme.lossColor
                        }}
                    >
                        {
                            props.win
                            ?
                            "Won Match"
                            :
                            "Lost Match"
                        }
                    </Typography>

                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            width: '140px',
                            fontSize: '10px',
                            color: theme.text
                        }}
                    >
                        { getTimeString(props.date) }
                    </Typography>

                </Stack>


                
                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: '37px',
                        bgcolor: theme.transparent,
                        paddingTop: '0px'
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
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={0}
                        sx={{
                            height: 'fit-content',
                            bgcolor: theme.transparent,
                            paddingTop: '0px'
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
                                {props.kills}
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
                                {props.deaths}
                            </Typography>

                            <Typography
                                textAlign="right"
                                sx={{
                                    fontWeight: 'bold', 
                                    paddingTop: '1px',
                                    width: '38px',
                                    fontSize: '14px',
                                    color: theme.assistColor
                                }}
                            >
                                {props.assists}
                            </Typography>

                    </Stack>
                </Stack>


                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: '37px',
                        bgcolor: theme.transparent,
                        paddingTop: '0px'
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
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={0}
                        sx={{
                            height: 'fit-content',
                            bgcolor: theme.transparent,
                            paddingTop: '0px'
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
                                {props.hero_damage}
                            </Typography>

                    </Stack>
                </Stack>

                
                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: '37px',
                        bgcolor: theme.transparent,
                        paddingTop: '0px'
                    }}>

                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 'bold', 
                            paddingTop: '0px',
                            width: '140px',
                            fontSize: '10px',
                            color: theme.text
                        }}
                    >
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={0}
                        sx={{
                            height: 'fit-content',
                            bgcolor: theme.transparent,
                            paddingTop: '0px'
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
                                {props.tower_damage}
                            </Typography>

                    </Stack>
                </Stack>

                <Box
                    component="img"
                    onClick={(e) => onDotabuffButtonClicked(e)}
                    sx={{
                        height: 24,
                        width: 24,
                        paddingTop: '6px',
                        cursor: 'pointer'
                    }}
                    alt="dotabuff icon"
                    src={dotabuffIcon}
                />

                <Box
                    component="img"
                    onClick={(e) => onOpendotaButtonClicked(e)}
                    sx={{
                        height: 24,
                        width: 24,
                        paddingTop: '6px',
                        cursor: 'pointer'
                    }}
                    alt="opendota icon"
                    src={opendotaIcon}
                />

        </Stack>
        
    )
}