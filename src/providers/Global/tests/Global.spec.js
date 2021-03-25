import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavBar from '../../../components/NavBar/NavBar.component';

const mockState = {
    searchKeyword: 'elon musk on TED Talks',
    theme: {
        fg: 'white',
        bg: '#5a458d',
    },
    isDarkMode: true,
}
const mockDispatch = jest.fn();
jest.mock('../Global.provider', () => ({
    useGlobal: () => ({
        state: mockState,
        dispatch: mockDispatch
    }),
}));

describe('Global Provider', () => {
    it('uses Reducer to dispatch action type "search", the new search term when user types on search box', () => {
        render(<NavBar />);
        let event = { target: { value: 'wize' }};
        fireEvent.change(screen.getByRole('textbox'), event);
        expect(mockDispatch).toHaveBeenCalledWith({'payload': 'wize', 'type': 'search'});
        expect(mockDispatch).toHaveBeenCalledTimes(1);
        mockDispatch.mockClear();
    });

    it('uses Reducer to dispatch action type "theme", the theme change when user toggles the button', () => {
        render(<NavBar />);
        let event = { target: { value: false }};
        fireEvent.click(screen.getByRole('checkbox'), event);
        expect(mockDispatch).toHaveBeenCalledWith({'payload': false, 'type': 'theme'});
        expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
});