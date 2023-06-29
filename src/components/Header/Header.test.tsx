import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../../theme/Theme';

import Header from './Header';


test('header render', () => {

    const lightDarkMode = darkTheme;

    const setSteamId = jest.fn();
    const setLightDarkMode = jest.fn();

    render (
        <ThemeProvider theme={lightDarkMode}>
            <Header props={{ userId: '', setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}  />
        </ThemeProvider>
    )

    //the Header should be showing
    const containerElement = screen.getByTestId('header-component');
    expect(containerElement).toBeInTheDocument();
});


test('click home from header', () => {

    const lightDarkMode = darkTheme;

    const setSteamId = jest.fn();
    const setLightDarkMode = jest.fn();

    render (
        <ThemeProvider theme={lightDarkMode}>
            <Header props={{ userId: '', setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}  />
        </ThemeProvider>
    )

    //click the home button in the header
    const homeButton = screen.getByTestId('header-component-home-button');
    expect(homeButton).toBeInTheDocument();
    fireEvent.click(homeButton);

    //check if setSteamId was called with the correct value
    expect(setSteamId).toHaveBeenCalledWith('');
    
});