
import { Stack, useTheme, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { GAME_MODE_AP, GAME_MODE_RANKED, GAME_MODE_TURBO } from '../../utils/constants';
import { getToggleButtonGroupSizeForWidthMode, getFontSizeForWidthMode, getFontWeightForWidthMode } from '../../utils/utils';

export interface GameModeSelectorProps {
    gameMode: string
    setGameMode: Function
    widthMode: string
}

export default function GameModeSelector({props} : {props: GameModeSelectorProps}) {

    const theme = useTheme();

    const onGameModeToggleChange: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement;
        // console.log(target.value);
        props.setGameMode(target.value);
    }


    return (
        <Stack 
            direction="column" 
            spacing={0.5}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody,
                paddingTop: '12px',
                paddingBottom: '12px',
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
                    WHAT
                </Typography>
            


                <ToggleButtonGroup
                    value={props.gameMode}
                    exclusive
                    onChange={(e) => onGameModeToggleChange(e)}
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
                        value={GAME_MODE_AP}
                    >
                        Normal
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
                        value={GAME_MODE_RANKED}
                    >
                        Ranked
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
                        value={GAME_MODE_TURBO}
                    >
                        Turbo
                    </ToggleButton>

                </ToggleButtonGroup>

            </Stack>

        </Stack>
        
    )
}