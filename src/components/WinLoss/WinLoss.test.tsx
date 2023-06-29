import React from 'react';
import { render, screen } from '@testing-library/react';

import WinLoss from './WinLoss';

test('win loss render', () => {

    const win = 10;
    const loss = 5;

    render (
        <WinLoss props={{ win: win, loss: loss }} />
    )

    //the WinLoss should be showing
    const componentElement = screen.getByTestId('win-loss-component');
    expect(componentElement).toBeInTheDocument();
});
