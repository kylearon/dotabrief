import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import PlayerEntryFromHistory from './PlayerEntryFromHistory';
import { ProfileData } from '../../hooks/useFetch';
import { HashRouter, useNavigate } from 'react-router-dom';


//mock the react-router-dom and the useNavigate() function
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));


test('PlayerEntryFromHistory render', () => {

    const mockPofile: ProfileData = {
        account_id: 12345,
        personaname: 'Test Player',
        avatar: 'https://example.com/avatar.jpg',
        avatarfull: 'https://example.com/avatarfull.jpg',
    };

    const setSteamIdsObject = jest.fn();

    render (
        <HashRouter>
            <PlayerEntryFromHistory props={{ account_id: mockPofile.account_id, personaname: mockPofile.personaname, avatarfull: mockPofile.avatarfull, setSteamIdsObject: setSteamIdsObject }} />
        </HashRouter>
    )

    //the PlayerEntryFromHistory should be showing
    const componentElement = screen.getByTestId('player-entry-from-history-component');
    expect(componentElement).toBeInTheDocument();
});


test('PlayerEntryFromHistory click', async () => {

    //create a mock useNavigate implementation as mockNavigate inside the test case
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

    const mockPofile: ProfileData = {
        account_id: 12345,
        personaname: 'Test Player',
        avatar: 'https://example.com/avatar.jpg',
        avatarfull: 'https://example.com/avatarfull.jpg',
    };

    const setSteamIdsObject = jest.fn();

    render (
        <HashRouter>
            <PlayerEntryFromHistory props={{ account_id: mockPofile.account_id, personaname: mockPofile.personaname, avatarfull: mockPofile.avatarfull, setSteamIdsObject: setSteamIdsObject }} />
        </HashRouter>
    )

    //the PlayerEntryFromHistory should be showing
    const componentElement = screen.getByTestId('player-entry-from-history-component');
    expect(componentElement).toBeInTheDocument();

    //click the entry
    fireEvent.click(componentElement);

    // Check if navigate has been called
    expect(mockNavigate).toHaveBeenCalled();

    // If you want to test it with a specific argument
    expect(mockNavigate).toHaveBeenCalledWith('/player/12345');

});


// test('PlayerEntryFromHistory remove button click', async () => {

//     //create a mock useNavigate implementation as mockNavigate inside the test case
//     const mockNavigate = jest.fn();
//     (useNavigate as jest.Mock).mockImplementation(() => mockNavigate);

//     //mock localStorage
//     let localStorageMock = (function() {
//     // global.localStorage = (function() {
//         let store = {};
//         return {
//             getItem: function(key) {
//                 return store[key];
//             },
//             setItem: function(key, value) {
//                 store[key] = value.toString();
//             },
//             clear: function() {
//                 store = {};
//             },
//         };
//     })();
//     Object.defineProperty(global, 'localStorage', {
//         value: localStorageMock,
//     });

//     const mockPofile: ProfileData = {
//         account_id: 12345,
//         personaname: 'Test Player',
//         avatar: 'https://example.com/avatar.jpg',
//         avatarfull: 'https://example.com/avatarfull.jpg',
//     };

//     const setSteamIdsObject = jest.fn();

//     render (
//         <HashRouter>
//             <PlayerEntryFromHistory props={{ account_id: mockPofile.account_id, personaname: mockPofile.personaname, avatarfull: mockPofile.avatarfull, setSteamIdsObject: setSteamIdsObject }} />
//         </HashRouter>
//     )

//     //the PlayerEntryFromHistory remove button should be showing
//     const removeButton = screen.getByTestId('player-entry-from-history-remove-button');
//     expect(removeButton).toBeInTheDocument();

//     //click the entry
//     fireEvent.click(removeButton);

//     //check if setSteamIdsObject has been called
//     expect(setSteamIdsObject).toHaveBeenCalled();
// });