import React, { useState } from 'react';
import { API_BASE_URL } from '../../utils/constants';
import { NavBar as Navigation, SearchFieldWrapper, SearchField, CheckBox, CheckBoxLabel, CheckBoxWrapper, LoginButton, RightDiv } from './styled';

const NavBar = ({ onVideosChanged }) => {
    const [searchValue, setSearchValue] = useState('elon musk on TED Talks');
    const [darkMode, setDarkMode] = useState(true);

    async function searchVideos(keystroke) {
        if (keystroke === 'Enter') {
            let response = await fetch(`${API_BASE_URL}?part=snippet&maxResults=25&q=${searchValue}&key=${process.env.REACT_APP_API_KEY}`);

            if (response.ok) { // if HTTP-status is 200-299
                let json = await response.json();
                onVideosChanged(json.items);
            } else {
                console.log(`HTTP-Error: ${response.status}`);
            }
        }
    }

    return (
        <Navigation>
            <SearchFieldWrapper>
                <span><i className="fa fa-search"></i></span>
                <SearchField placeholder="search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyUp={(e) => searchVideos(e.key)}></SearchField>
            </SearchFieldWrapper>
            <RightDiv>
                <CheckBoxWrapper >
                    <CheckBox id="checkbox" type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                    <CheckBoxLabel htmlFor="checkbox" />
                    <span>Dark Mode</span>
                </CheckBoxWrapper>

                <LoginButton ><i className="fa fa-user icon"></i></LoginButton>
            </RightDiv>
        </Navigation>
    )
}

export default NavBar;