import mock from '../../mock.json';
import mockRelated from '../../mockRelatedVideos.json';
import { storage } from '../../utils/storage';
import { FAVORITE_VIDEOS } from '../../utils/constants';

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
        case 'login':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            }
        case 'logout':
            return {
                ...state,
                isAuthenticated: false,
                user: {},
            }
        case 'addToFavorites':
            const newState = {
                ...state,
                favoritesVid: [...state.favoritesVid, action.payload],
            };
            storage.set(FAVORITE_VIDEOS, newState.favoritesVid);
            return newState;
        case 'removeFromFavorites':
            return {
                ...state,
                favoritesVid: state.favoritesVid.filter(v => v.videoId !== action.payload.videoId),
            }
        default:
            return state;
    }
}

const favoriteVideosFromLocal = storage.get(FAVORITE_VIDEOS) || [];

export const initialState = {
    isAuthenticated: false,
    user: {},
    searchKeyword: 'elon musk on TED Talks',
    theme: {
        fg: '#c9d1d9',
        bg: '#0d1117',
    },
    isDarkMode: true,
    videos: mock.items.slice(0,24),
    relatedVid: mockRelated.items,
    favoritesVid: favoriteVideosFromLocal,
}
