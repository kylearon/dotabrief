
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../../theme/Theme';

import { CookiesProvider } from "react-cookie";
import { MemoryRouter } from 'react-router-dom';
import { LIGHT_MODE, DARK_MODE } from '../../utils/constants';

import MainPage from './MainPage';


test('main page render', () => {

    const steamId = "54934870";
    const lightDarkMode = darkTheme;

    const setSteamId = jest.fn();
    const setLightDarkMode = jest.fn();

    render (
        <ThemeProvider theme={lightDarkMode}>
            <MainPage props={{ steamId: steamId, setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
        </ThemeProvider>
    )

    //the MainPage should be showing
    const containerElement = screen.getByTestId('main-page');
    expect(containerElement).toBeInTheDocument();
});