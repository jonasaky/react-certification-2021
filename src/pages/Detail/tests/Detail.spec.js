import { render, screen } from '@testing-library/react';
import React from 'react';
import Detail from '../Detail.page';
import { BrowserRouter } from 'react-router-dom'

const mockState = {
    relatedVid: [
        {
            etag: "k1wyJbCHKeQDdhqFwho3uNKqZbM",
            id: {
                videoId: '1',
            },
            snippet: {
                title: "The future we&#39;re building -- and boring | Elon Musk",
                thumbnails: {
                    medium: {
                        url: "https://i.ytimg.com/vi/zIwLWfaAg-8/mqdefault.jpg",
                    },
                },
            }
        },
        {
            etag: "k1wyJbCHKeQDdhqFwho3uNKqZbMx",
            id: {
                videoId: '2',
            },
            snippet: {
                title: "The future we&#39;re building -- and boring | Elon Musk",
                thumbnails: {
                    medium: {
                        url: "https://i.ytimg.com/vi/zIwLWfaAg-8/mqdefault.jpg",
                    },
                },
            }
        },
    ]
}

jest.mock('../../../providers/Global', () => ({
    useGlobal: () => ({
        state: mockState,
    }),
}));

// test utils file
const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({state: {
        videoId: 'zIwLWfaAg-8',
        title: 'The future we&#39;re building -- and boring | Elon Musk',
        description: 'Elon Musk discusses his new project digging tunnels under LA, the latest from Tesla and SpaceX and his motivation for building a future on Mars in conversation ...',
        publishedAt: new Date(),
    }}, 'Test Detail Page', route)
  
    return render(ui, { wrapper: BrowserRouter })
}

describe('Detail page', () => {
    it('contains goHome link', () => {
        renderWithRouter(<Detail />);
        expect(screen.getByText('← Go home')).toBeInTheDocument();
    });

    it('contains description of the video', () => {
        renderWithRouter(<Detail />);
        expect(screen.getByText('Elon Musk discusses his new project digging', { exact: false })).toBeTruthy();
    });

    it('contains title along with published date', () => {
        renderWithRouter(<Detail />);
        expect(screen.getByText('published on', { exact: false })).toBeTruthy();
    })
    
    it('contains iframe element', () => {
        renderWithRouter(<Detail />);
        expect(screen.getByTestId('iframe')).toBeInTheDocument();
    });
    
    it('contains related videos with img elements', () => {
        renderWithRouter(<Detail />);
        expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(2);
    });
})