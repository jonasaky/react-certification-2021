import React from 'react';
import { render, screen } from "@testing-library/react";
import Home from '../Home.page';
import { useAuth } from '../../../providers/Auth';

jest.mock("../../../providers/Auth", () => ({
    useAuth: () => ({
        authenticated: true,
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