import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CookiesProvider } from "react-cookie";
import { MemoryRouter } from 'react-router-dom';
import { LIGHT_MODE, DARK_MODE } from './utils/constants';
import { rgbToHex } from './utils/utils';

import App from './App';

test('router without steamId', () => {
    render(
        <React.StrictMode>
            <CookiesProvider>
            <MemoryRouter initialEntries={["/"]}> 
                <App />
            </MemoryRouter>
            </CookiesProvider>
        </React.StrictMode>
    );

    //the SplashPage should be showing since there is no steam id
    const containerElement = screen.getByTestId('splash-page');
    expect(containerElement).toBeInTheDocument();
});

test('router with steamId', () => {
    render(
        <React.StrictMode>
            <CookiesProvider>
            <MemoryRouter initialEntries={["/player/54934870"]}> 
                <App />
            </MemoryRouter>
            </CookiesProvider>
        </React.StrictMode>
    );

    //the MainPage should be showing
    const containerElement = screen.getByTestId('main-page');
    expect(containerElement).toBeInTheDocument();
});


describe('App', () => {
    // Mock localStorage
    let localStorageMock;
    beforeEach(() => {
        localStorageMock = (function() {
            let store = {};
            return {
            getItem: function(key) {
                return store[key];
            },
            setItem: function(key, value) {
                store[key] = value.toString();
            },
            clear: function() {
                store = {};
            },
            };
        })();
        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });
    });
  
    it('initializes with light theme when localStorage is set to light', () => {
        window.localStorage.setItem('theme', LIGHT_MODE);
  
        render(
            <React.StrictMode>
                <CookiesProvider>
                <MemoryRouter initialEntries={["/"]}> 
                    <App />
                </MemoryRouter>
                </CookiesProvider>
            </React.StrictMode>
        );

        //test that the light theme is showing
        const containerElement = screen.getByTestId('splash-page');
        const style = window.getComputedStyle(containerElement);
        expect(rgbToHex(style.backgroundColor)).toBe('#e2e2e2');
    });
  
    it('initializes with dark theme when localStorage is set to dark', () => {
        window.localStorage.setItem('theme', DARK_MODE);
    
        render(
            <React.StrictMode>
                <CookiesProvider>
                <MemoryRouter initialEntries={["/"]}> 
                    <App />
                </MemoryRouter>
                </CookiesProvider>
            </React.StrictMode>
        );
      
        //test that the dark theme is showing
        const containerElement = screen.getByTestId('splash-page');
        const style = window.getComputedStyle(containerElement);
        expect(rgbToHex(style.backgroundColor)).toBe('#2b2a2c');
    });
  

    it('initializes with dark theme when localStorage is not set', () => {
        window.localStorage.clear();
    
        render(
            <React.StrictMode>
                <CookiesProvider>
                <MemoryRouter initialEntries={["/"]}> 
                    <App />
                </MemoryRouter>
                </CookiesProvider>
            </React.StrictMode>
        );
      
        //test that the dark theme is showing
        const containerElement = screen.getByTestId('splash-page');
        const style = window.getComputedStyle(containerElement);
        expect(rgbToHex(style.backgroundColor)).toBe('#2b2a2c');
    });
  

    it('saves the theme name to localStorage when the theme changes', () => {
        window.localStorage.setItem('theme', DARK_MODE);

        render(
            <React.StrictMode>
                <CookiesProvider>
                <MemoryRouter initialEntries={["/"]}> 
                    <App />
                </MemoryRouter>
                </CookiesProvider>
            </React.StrictMode>
        );

        //change to light mode
        const lightModeButton = screen.getByTestId('light-mode-button');
        fireEvent.click(lightModeButton);

        //check that the theme name was saved to localStorage
        expect(window.localStorage.getItem('theme')).toEqual(LIGHT_MODE);

        //change to dark mode
        const darkModeButton = screen.getByTestId('dark-mode-button');
        fireEvent.click(darkModeButton);

        //check that the theme name was saved to localStorage
        expect(window.localStorage.getItem('theme')).toEqual(DARK_MODE);

    });
});


// test('template', () => {
//     render(
//     );
// });

