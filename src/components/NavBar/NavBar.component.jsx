import React, { useState } from 'react';
import { useGlobal } from '../../providers/Global';
import { API_BASE_URL } from '../../utils/constants';
import { useFetch } from '../../utils/hooks/useFetch';
import { NavBar as Navigation, SearchFieldWrapper, SearchField, CheckBox, CheckBoxLabel, CheckBoxWrapper, LoginButton, RightDiv } from './styled';

const NavBar = () => {
    const { state, dispatch } = useGlobal();
    const { searchKeyword, isDarkMode } = state;
    const [darkMode, setDarkMode] = useState(isDarkMode);
    const [url, setUrl] = useState('');
    useFetch(url, 'updateVideos');

    async function searchVideos(keystroke) {
        if (keystroke === 'Enter') {
            setUrl(`${API_BASE_URL}?part=snippet&maxResults=25&q=${encodeURI(searchKeyword)}&key=${process.env.REACT_APP_API_KEY}`);
        }
    }

    function updateKeyword(e) {
        return dispatch({ type: 'search', payload: e.target.value });
    }

    function toggleTheme() {
        setDarkMode(!darkMode);
        dispatch({ type: 'theme', payload: !darkMode });
    }

    return (
        <Navigation>
            <SearchFieldWrapper>
                <span><i className="fa fa-search"></i></span>
                <SearchField placeholder="search..." value={searchKeyword} onChange={(e) => updateKeyword(e)} onKeyUp={(e) => searchVideos(e.key)}></SearchField>
            </SearchFieldWrapper>
            <RightDiv>
                <CheckBoxWrapper >
                    <CheckBox id="checkbox" type="checkbox" checked={darkMode} onChange={() => toggleTheme()} />
                    <CheckBoxLabel htmlFor="checkbox" />
                    <span>Dark Mode</span>
                </CheckBoxWrapper>

                <LoginButton ><i className="fa fa-user icon"></i></LoginButton>
            </RightDiv>
        </Navigation>
    )
}

export default NavBar;
