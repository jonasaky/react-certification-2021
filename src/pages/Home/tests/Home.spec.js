import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from '../Home.page';
const mockState = {
    searchKeyword: 'elon musk on TED Talks',
    theme: {
        fg: 'white',
        bg: '#5a458d',
    },
    isDarkMode: true,
}
jest.mock("../../../providers/Global", () => ({
    useGlobal: () => ({
        state: mockState,
    }),
}));

describe('Home page', () => {
    it('contains a title', () => {
        render(<Home />);
        expect(screen.getByText('Welcome to YouTube videoclips!')).toBeTruthy();
    });

    it('contains video list', () => {
        render(<Home />);
        expect(screen.queryAllByRole('img').length).toBeGreaterThan(0);
    });
});