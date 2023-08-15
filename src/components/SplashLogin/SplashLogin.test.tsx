import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import SplashLogin from './SplashLogin';
import { TextField } from '@mui/material';
import { HashRouter } from 'react-router-dom';

test('splash login render', () => {

    const setSteamId = jest.fn();

    render (
        <SplashLogin props={{ setSteamId: setSteamId }} />
    )

    //the SplashLogin should be showing
    const componentElement = screen.getByTestId('splash-login-component');
    expect(componentElement).toBeInTheDocument();
});


test('splash login enter valid steam id', async () => {

    const setSteamId = jest.fn();

    render (
        <SplashLogin props={{ setSteamId: setSteamId }} />
    )

    //the SplashLogin text field for entering the search
    const splashLoginTextField = screen.getByTestId('splash-login-text-field');    
    expect(splashLoginTextField).toBeInTheDocument();

    //get the input HTML element
    const splashLoginTextFieldInput = splashLoginTextField.querySelector('input');
    if(splashLoginTextFieldInput) {

        //enter a value into the input
        fireEvent.change(splashLoginTextFieldInput, {
            target: { value: '54934870' },
        });
        expect(splashLoginTextFieldInput.value).toBe('54934870');

        //key press for enter
        fireEvent.keyPress(splashLoginTextFieldInput, { key: 'Enter', code: 'Enter', charCode: 13 });

        // Wait for the fetch() call to complete
        await waitFor(() => {
            // Here you should check a condition that will be true once fetch() has completed
            // For example, if your fetch() call updates the DOM or the state of your component
            // in some way, you can check for that.

            //check if setSteamId was called with the correct value
            expect(setSteamId).toHaveBeenCalledWith('54934870');
        });
 
    }
});



test('splash login enter invalid steam id', async () => {

    const setSteamId = jest.fn();
    const consoleSpy = jest.spyOn(console, 'log');

    render (
        <HashRouter>
            <SplashLogin props={{ setSteamId: setSteamId }} />
        </HashRouter>
    )

    //the SplashLogin text field for entering the search
    const splashLoginTextField = screen.getByTestId('splash-login-text-field');    
    expect(splashLoginTextField).toBeInTheDocument();

    //get the input HTML element
    const splashLoginTextFieldInput = splashLoginTextField.querySelector('input');
    if(splashLoginTextFieldInput) {

        //enter a value into the input
        fireEvent.change(splashLoginTextFieldInput, {
            target: { value: '_BAD_ID_' },
        });
        expect(splashLoginTextFieldInput.value).toBe('_BAD_ID_');

        //key press for enter
        fireEvent.keyPress(splashLoginTextFieldInput, { key: 'Enter', code: 'Enter', charCode: 13 });

        //wait for the fetch() call to complete
        await waitFor(() => {
            // Check that console.log was called with the ERROR
            expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('ERROR'));
        });
        

        //then there is a second fetch() for trying this as a player name
        // await waitFor(() => {
        //     // Check that console.log was called with playerNameData
        //     expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('playerNameData'));
        // });


        // Clean up
        consoleSpy.mockRestore();
    }
});