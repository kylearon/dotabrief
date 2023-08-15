import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../../theme/Theme';

import { CookiesProvider } from "react-cookie";
import { MemoryRouter } from 'react-router-dom';
import { LIGHT_MODE, DARK_MODE } from '../../utils/constants';
import SplashPage from './SplashPage';


test('splash page render', () => {

    const lightDarkMode = darkTheme;

    const setSteamId = jest.fn();
    const setLightDarkMode = jest.fn();

    render (
        <ThemeProvider theme={lightDarkMode}>
            <SplashPage props={{ setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
        </ThemeProvider>
    )

    //the SplashPage should be showing
    const containerElement = screen.getByTestId('splash-page');
    expect(containerElement).toBeInTheDocument();
});