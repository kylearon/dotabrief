
import { Container, Stack, Box, useTheme } from '@mui/material';

import Typography from '@mui/material/Typography';

export default function Header({userId}) {

    const theme = useTheme();

    return (
        <Stack 
            direction="row" 
            spacing={2}
            sx={{
                height: 'fit-content',
                bgcolor: theme.headerBody
            }}>

            <Typography
                variant="h3"
                sx={{
                    fontWeight: 'bold', 
                    paddingLeft: '10px',
                    color: theme.text
                }}
            >
                dotabrief
            </Typography>

            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold', 
                    paddingTop: '20px',
                    width: '100%',
                    color: theme.text
                }}
            >
                your personal dota recommendation engine
            </Typography>

            
                {
                    userId 
                    ?
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: 'fit-content' }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold', 
                                paddingTop: '20px',
                                marginRight: '12px',
                                color: theme.text
                            }}
                        >
                            {userId}
                        </Typography>
                    </Box> 
                    :
                    <></>
                }

        </Stack>
        
    )
}