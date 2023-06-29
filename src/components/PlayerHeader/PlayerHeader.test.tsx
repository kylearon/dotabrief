import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../../theme/Theme';

import PlayerHeader from './PlayerHeader';
import { PlayerData, WinLossData } from '../../hooks/useFetch';


test('player header render', () => {

    const lightDarkMode = darkTheme;

    // Create mock data for the props
    const mockPlayerData: PlayerData = {
        competitive_rank: 100,
        rank_tier: 2,
        solo_competitive_rank: 150,
        profile: {
            account_id: 12345,
            personaname: 'Test Player',
            avatar: 'https://example.com/avatar.jpg',
            avatarfull: 'https://example.com/avatarfull.jpg',
        },
    };

    const mockWinLossData: WinLossData = {
        win: 10,
        lose: 5,
    };

    render (
        <ThemeProvider theme={lightDarkMode}>
            <PlayerHeader props={{playerData: mockPlayerData, winLossData: mockWinLossData }}/>
        </ThemeProvider>
    )

    //the PlayerHeader should be showing
    const componentElement = screen.getByTestId('player-header-component');
    expect(componentElement).toBeInTheDocument();
});


