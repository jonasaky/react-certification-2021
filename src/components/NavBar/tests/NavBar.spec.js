import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar.component';

const mockState = {
    searchKeyword: 'elon musk on TED Talks',
    theme: {
        fg: 'white',
        bg: '#5a458d',
    },
    isDarkMode: true,
}
jest.mock('../../../providers/Global', () => ({
    useGlobal: () => ({
        state: mockState,
    }),
}));

describe('Navigation bar', () => {
    it('contains a search field input', () => {
        render(<NavBar />);
        expect(screen.getAllByPlaceholderText('search...')).toBeTruthy();
    });

    it('contains toggle button to switch theme', () => {
        render(<NavBar />);
        expect(screen.getByRole('checkbox')).toBeTruthy();
    });

    it('contains a login button', () => {
        render(<NavBar />);
        expect(screen.getByRole('button')).toBeTruthy();
    });
});