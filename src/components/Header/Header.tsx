
import { Stack, Box, useTheme, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { LightModeOutlined, DarkModeOutlined } from '@mui/icons-material';


import React, { MouseEventHandler } from 'react';

import Typography from '@mui/material/Typography';
import { DARK_MODE, LIGHT_MODE } from '../../utils/constants';
import { darkTheme, lightTheme } from '../../theme/Theme';

export interface HeaderProps {
    userId: string
    setSteamId: (id:string) => void
    lightDarkMode: string
    setLightDarkMode: Function
}


export default function Header({props} : {props: HeaderProps}) {

    const theme = useTheme();

    const onHomeButtonClicked: MouseEventHandler<HTMLButtonElement> = (e) => {
        //setting the steamId will cause the entire page to re-render
        props.setSteamId("");
    }

    const onLightDarkToggleChange: MouseEventHandler<HTMLElement> = (e) => {
        const target = e.target as HTMLButtonElement;
        // console.log(target);
        if(target.value === LIGHT_MODE) {
            props.setLightDarkMode(lightTheme);
        } else {
            props.setLightDarkMode(darkTheme);
        }
    }

    return (
        <Stack 
            direction="row" 
            spacing={1}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Button
                onClick={(e) => onHomeButtonClicked(e)}
                sx={{
                    fontSize: '36px',
                    fontWeight: 'bold', 
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    paddingRight: '0px',
                    paddingLeft: '0px',
                    width: '230px',
                    color: theme.text
                }}
                //monospace text generated here: https://tools.picsart.com/text/font-generator/
            >
                𝚍𝚘𝚝𝚊𝚋𝚛𝚒𝚎𝚏
            </Button>

            <Typography
                sx={{
                    fontSize: '18px',
                    fontWeight: 'normal', 
                    paddingTop: '24px',
                    width: '400px',
                    color: theme.text
                }}
            >
                (breaking down your recent dota performance)
            </Typography>

            
           
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '480px' }}>
                <ToggleButtonGroup
                    value={props.lightDarkMode}
                    exclusive
                    onChange={(e) => onLightDarkToggleChange(e)}
                    sx={{
                        height: '50px',
                        paddingTop: '6px'
                    }}
                >
                    <ToggleButton 
                        value={LIGHT_MODE}
                        aria-label={LIGHT_MODE}
                        sx={{
                            width: '64px',
                            paddingTop: '6px'
                        }}
                    >
                        <LightModeOutlined 
                            sx={{ 
                                pointerEvents: 'none',
                                color: theme.text
                            }}
                        />
                    </ToggleButton>
                    <ToggleButton 
                        value={DARK_MODE} 
                        aria-label={DARK_MODE}
                        sx={{
                            width: '64px',
                            paddingTop: '6px'
                        }}
                    >
                        <DarkModeOutlined 
                            sx={{ 
                                pointerEvents: 'none',
                                color: theme.text
                            }}
                        />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box> 

        </Stack>
        
    )
}