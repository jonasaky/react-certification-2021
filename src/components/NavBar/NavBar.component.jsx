import React from 'react';
import './NavBar.styles.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <input className="searchField" type="text" placeholder="search..."></input>
            
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>

            <button className="loginButton">Login</button>
        </div>
    )
}

export default NavBar;