
import { Stack, useTheme, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

import React, { MouseEventHandler } from 'react';
import { GAME_MODE_AP, GAME_MODE_TURBO, LOBBY_TYPE_NORMAL, LOBBY_TYPE_RANKED } from '../../utils/constants';


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
                paddingTop: '14px',
                paddingBottom: '0px',
                paddingLeft: '0px'
            }}>

            <ToggleButtonGroup
                value={props.gameMode}
                exclusive
                onChange={(e) => onGameModeToggleChange(e)}
                aria-label="Platform"
                sx={{
                    height: 36,
                    width: 200
                }}
                >
                <ToggleButton sx={{ width: 100 }} value={GAME_MODE_AP}>AP/Ranked</ToggleButton>
                <ToggleButton sx={{ width: 90 }} value={GAME_MODE_TURBO}>Turbo</ToggleButton>
            </ToggleButtonGroup>

        </Stack>
        
    )
}