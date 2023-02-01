
import { Stack, Box, useTheme, Collapse } from '@mui/material';

import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import { STEAM_CDN_URL } from '../../utils/constants';
import { MatchData } from '../../hooks/useFetch';
import GameSummary from '../GameSummary/GameSummary';
import { getAlternateBackgroundColorFromHeroId, getBackgroundColorFromHeroId, getWinFromMatchData } from '../../utils/utils';

export interface HeroSummaryProps {
    id: number
    name: string
    localized_name: string
    win: number
    loss: number
    img: string
    kills_avg: number
    deaths_avg: number
    assists_avg: number
    hero_damage_avg: number
    tower_damage_avg: number
    games_match_data: MatchData[] 
}

export default function HeroSummary({props} : {props: HeroSummaryProps}) {

    const theme = useTheme();

    const [gamesCollapsed, setGamesCollapsed] = useState<boolean>(false);

    const imgSrc = STEAM_CDN_URL + props.img;

    function onClick() {
        setGamesCollapsed(!gamesCollapsed);
    }


    function getBackgroundColor():string {
        const backgroundColor = getBackgroundColorFromHeroId(props.id) + "44";
        if(backgroundColor) {
            return backgroundColor;
        } else {
            return theme.headerBody;
        }
    }

    function getHoverBackgroundColor():string {
        const backgroundColor = getBackgroundColorFromHeroId(props.id) + "88";
        if(backgroundColor) {
            return backgroundColor;
        } else {
            return theme.headerBodyHover;
        }
    }

    let useAlternateRowColor: boolean = false;
    
    function getGameBackgroundColor():string {

        //swap the value
        useAlternateRowColor = !useAlternateRowColor;

        //try to lookup the correct color
        let backgroundColor: string = "";
        if(useAlternateRowColor) {
            //TODO: uncomment to use custom hero colors
            // backgroundColor = getBackgroundColorFromHeroId(props.id) + "33";
            backgroundColor = theme.headerBody;
        } else {
            //TODO: uncomment to use custom hero colors
            // backgroundColor = getAlternateBackgroundColorFromHeroId(props.id) + "33";
            backgroundColor = theme.headerBodyAlternate;
        }

        //return the correct value if one was found
        if(backgroundColor) {
            return backgroundColor;
        } else {
            return theme.headerBody;
        }
    }



    return (

        <Stack 
            direction="column" 
            spacing={0}
            sx={{
                height: 'fit-content',
                bgcolor: theme.transparent,
                paddingTop: '0px'
            }}>


            <Stack 
                direction="row" 
                spacing={2}
                onClick={onClick}
                sx={{
                    height: 'fit-content',
                    bgcolor: getBackgroundColor,
                    "&:hover": {
                        bgcolor: getHoverBackgroundColor, 
                    },

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
                        bgcolor: theme.transparent,
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
                        {props.localized_name}
                    </Typography>

                    <Stack 
                        direction="row" 
                        spacing={0}
                        sx={{
                            height: 'fit-content',
                            bgcolor: theme.transparent,
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
                        bgcolor: theme.transparent,
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
                            bgcolor: theme.transparent,
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
                        bgcolor: theme.transparent,
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
                            bgcolor: theme.transparent,
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
                                {props.hero_damage_avg}
                            </Typography>

                    </Stack>
                </Stack>

                
                <Stack 
                    direction="column" 
                    spacing={0}
                    sx={{
                        height: 'fit-content',
                        bgcolor: theme.transparent,
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
                            bgcolor: theme.transparent,
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
                                {props.tower_damage_avg}
                            </Typography>

                    </Stack>
                </Stack>

            </Stack>

            <Collapse in={gamesCollapsed}>
                {
                    props.games_match_data.map(match => (
                        <GameSummary key={match.match_id} 
                            props={{ 
                                match_id: match.match_id,
                                hero_id: match.hero_id,
                                hero_name: props.name,
                                img: props.img,
                                date: match.start_time,
                                win: getWinFromMatchData(match),
                                kills: match.kills,
                                deaths: match.deaths,
                                assists: match.assists,
                                hero_damage: match.hero_damage,
                                tower_damage: match.tower_damage,
                                background_color: getGameBackgroundColor()
                            }} 
                        />
                    ))
                }
            </Collapse>


        </Stack>
        
    )
}