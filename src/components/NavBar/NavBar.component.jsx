import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useGlobal } from '../../providers/Global';
import { API_BASE_URL } from '../../utils/constants';
import { useFetch } from '../../utils/hooks/useFetch';
import { NavBar as Navigation, SearchFieldWrapper, SearchField, CheckBox, CheckBoxLabel, CheckBoxWrapper, LoginButton, RightDiv } from './styled';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const NavBar = () => {
    const history = useHistory();
    const { state, dispatch } = useGlobal();
    const { searchKeyword, isDarkMode, isAuthenticated, user } = state;
    const [url, setUrl] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    useFetch(url, 'updateVideos');

    async function searchVideos(keystroke) {
        if (keystroke === 'Enter') {
            setUrl(`${API_BASE_URL}?part=snippet&maxResults=25&q=${encodeURI(searchKeyword)}&key=${process.env.REACT_APP_API_KEY}`);
        }
    }

    function updateKeyword(e) {
        dispatch({ type: 'search', payload: e.target.value });
    }

    function toggleTheme() {
        dispatch({ type: 'theme', payload: !isDarkMode });
    }

    function goToLogin() {
        history.push('/login');
    }

    function logout() {
        dispatch({ type: 'logout', payload: true });
    }

    function goToFavorites() {
        history.push('/favorites');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Navigation>
            <SearchFieldWrapper>
                <span><i className="fa fa-search"></i></span>
                <SearchField placeholder="search..." value={searchKeyword} onChange={(e) => updateKeyword(e)} onKeyUp={(e) => searchVideos(e.key)}></SearchField>
            </SearchFieldWrapper>
            <RightDiv>
                <CheckBoxWrapper >
                    <CheckBox id="checkbox" type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                    <CheckBoxLabel htmlFor="checkbox" />
                    <span>Dark Mode</span>
                </CheckBoxWrapper>

                {isAuthenticated ? 
                    <>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <img alt={user.name} src={user.avatarUrl} width={28} height={28} style={{borderRadius: 14}}/>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={goToFavorites}>Favorites</MenuItem>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
                    </> :
                    <LoginButton onClick={goToLogin} >
                        <i className="fa fa-user icon"></i>
                    </LoginButton>
                }
            </RightDiv>
        </Navigation>
    )
}

export default NavBar;
