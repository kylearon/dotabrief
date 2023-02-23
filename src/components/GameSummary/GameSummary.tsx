
import { Box, Stack, useTheme } from '@mui/material';

import React, { MouseEventHandler } from 'react';

import Typography from '@mui/material/Typography';
import { getTimeStringFromSeconds } from '../../utils/utils';
import { DOTABUFF_MATCH_URL, OPENDOTA_MATCH_URL } from '../../utils/constants';
import ItemRow from '../ItemRow/ItemRow';

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

    kills_avg: number
    deaths_avg: number
    assists_avg: number
    hero_damage_avg: number
    tower_damage_avg: number

    item_0: number
    item_1: number
    item_2: number
    item_3: number
    item_4: number
    item_5: number

    widthMode: string
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
                bgcolor: props.background_color,
                "& .offsite-button": {
                    display: "none"
                },
                "&:hover .offsite-button": {
                    display: "flex"
                },
                flexWrap: "wrap",
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
                        { getTimeStringFromSeconds(props.date) }
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
                            width: '120px',
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
                                    paddingLeft: '8px',
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


                {
                    props.widthMode != "small"
                    ?
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
                                width: '120px',
                                fontSize: '12px',
                                color: theme.text
                            }}
                        >
                            {props.hero_damage}
                        </Typography>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                width: '120px',
                                fontSize: '10px',
                                color: (props.hero_damage - props.hero_damage_avg) > 0 ? theme.winColor : theme.lossColor
                            }}
                        >
                            { "(" +  ((props.hero_damage - props.hero_damage_avg) > 0 ? "+" : "") + (props.hero_damage - props.hero_damage_avg) + ")" }
                        </Typography>

                    </Stack>
                    :
                    <></>
                }


                {
                    props.widthMode != "small"
                    ?
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
                                width: '120px',
                                fontSize: '12px',
                                color: theme.text
                            }}
                        >
                            {props.tower_damage}
                        </Typography>

                        <Typography
                            textAlign="center"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '0px',
                                width: '120px',
                                fontSize: '10px',
                                color: (props.tower_damage - props.tower_damage_avg) > 0 ? theme.winColor : theme.lossColor
                            }}
                        >
                            { "(" +  ((props.tower_damage - props.tower_damage_avg) > 0 ? "+" : "") + (props.tower_damage - props.tower_damage_avg) + ")" }
                        </Typography>

                    </Stack>
                    :
                    <></>
                }

                {
                    props.widthMode != "small"
                    ?
                    <ItemRow props={{ background_color: props.background_color, item_0: props.item_0, item_1: props.item_1, item_2: props.item_2, item_3: props.item_3, item_4: props.item_4, item_5: props.item_5 }}/>
                    :
                    <></>
                }

                {
                    props.widthMode != "small"
                    ?
                    <Box
                        component="img"
                        className="offsite-button"
                        onClick={(e) => onDotabuffButtonClicked(e)}
                        sx={{
                            height: 24,
                            width: 24,
                            paddingTop: '6px',
                            cursor: 'pointer',
                            opacity: '0.7'
                        }}
                        alt="dotabuff icon"
                        src={dotabuffIcon}
                    />
                    :
                    <></>
                }

                {
                    props.widthMode != "small"
                    ?
                    <Box
                        component="img"
                        className="offsite-button"
                        onClick={(e) => onOpendotaButtonClicked(e)}
                        sx={{
                            height: 24,
                            width: 24,
                            paddingTop: '6px',
                            cursor: 'pointer',
                            opacity: '0.7'
                        }}
                        alt="opendota icon"
                        src={opendotaIcon}
                    />
                    :
                    <></>
                }

        </Stack>
        
    )
}