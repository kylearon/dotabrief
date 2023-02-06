
import { Stack, useTheme, Button, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { GAME_MODE_AP, GAME_MODE_RANKED, GAME_MODE_TURBO, LOBBY_TYPE_NORMAL, LOBBY_TYPE_RANKED } from '../../utils/constants';


export interface GameModeSelectorProps {
    gameMode: string
    setGameMode: Function
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
                paddingBottom: '0px',
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
                >

                    <ToggleButton 
                        sx={{ 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={GAME_MODE_AP}
                    >
                        Normal
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
                        }} 
                        value={GAME_MODE_RANKED}
                    >
                        Ranked
                    </ToggleButton>

                    <ToggleButton 
                        sx={{ 
                            "&.Mui-selected, &.Mui-selected:hover": {
                                color: "white",
                                backgroundColor: theme.headerButtonBackground
                            }
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