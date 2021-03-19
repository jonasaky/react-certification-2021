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
    videos: [
        {
            etag: "k1wyJbCHKeQDdhqFwho3uNKqZbM",
            id: {
                kind: "youtube#video",
                videoId: "zIwLWfaAg-8"
            },
            snippet: {
            publishedAt: "2017-05-03T14:54:56Z",
            title: "The future we&#39;re building -- and boring | Elon Musk",
            description: "Elon Musk discusses his new project digging tunnels under LA, the latest from Tesla and SpaceX and his motivation for building a future on Mars in conversation ...",
            thumbnails: {
                medium: {
                    url: "https://i.ytimg.com/vi/zIwLWfaAg-8/mqdefault.jpg",
                    width: 320,
                    height: 180
                },
            },
            }
        },
    ]
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