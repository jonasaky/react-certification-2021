import React from 'react';
import { render, screen } from "@testing-library/react";
import NavBar from '../NavBar.component';

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