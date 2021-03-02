import React from 'react';
import { NavBar as Navigation, SearchField, CheckBox, CheckBoxLabel, CheckBoxWrapper, LoginButton } from './styled';

const NavBar = () => {
    return (
        <Navigation>
            <SearchField placeholder="search..."></SearchField>
            
            <CheckBoxWrapper >
                <CheckBox id="checkbox" type="checkbox" />
                <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>

            <LoginButton >Login</LoginButton>
        </Navigation>
    )
}

export default NavBar;