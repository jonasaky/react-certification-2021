import mock from '../../mock.json';
import mockRelated from '../../mockRelatedVideos.json';

// This fn swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
    fg: bg,
    bg: fg
});

export function globalReducer(state, action) {
    switch (action.type) {
        case 'search':
            return {
                ...state,
                searchKeyword: action.payload,
            }
        case 'theme':
            let theme = action.payload ? initialState.theme : invertTheme(initialState.theme);
            return {
                ...state,
                theme,
                isDarkMode: action.payload,
            }
        case 'updateVideos':
            return {
                ...state,
                videos: action.payload,
            }
        case 'updateRelated':
            return {
                ...state,
                relatedVid: action.payload,
            }
        default:
            return state;
    }
}

export const initialState = {
    searchKeyword: 'elon musk on TED Talks',
    theme: {
        fg: '#c9d1d9',
        bg: '#0d1117',
    },
    isDarkMode: true,
    videos: mock.items.slice(0,24),
    relatedVid: mockRelated.items,
}
