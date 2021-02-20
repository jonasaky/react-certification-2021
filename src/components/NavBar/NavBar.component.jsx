import React from 'react';
import Styled from './styled';

const NavBar = () => {
    return (
        <Styled.NavBar>
            <Styled.SearchField placeholder="search..."></Styled.SearchField>
            
            <Styled.CheckBoxWrapper >
                <Styled.CheckBox id="checkbox" type="checkbox" />
                <Styled.CheckBoxLabel htmlFor="checkbox" />
            </Styled.CheckBoxWrapper>

            <Styled.LoginButton >Login</Styled.LoginButton>
        </Styled.NavBar>
    )
}

export default NavBar;