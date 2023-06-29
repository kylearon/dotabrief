import React from 'react';
import { render, screen } from '@testing-library/react';

import WinRate from './WinRate';

test('win rate render', () => {

    const win = 10;
    const loss = 5;

    render (
        <WinRate props={{ rate: "52%" }} />
    )

    //the WinRate should be showing
    const componentElement = screen.getByTestId('win-rate-component');
    expect(componentElement).toBeInTheDocument();
});
