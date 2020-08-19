import React from 'react';
import classes from './header.module.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const Header = ()=>{
    return(
        <header className={classes.headerWrapper}>
            <nav>
                <MenuIcon />
                <img src="./assests/youtube-logo.png" alt="youtube" />
            </nav>
            <nav className={classes.searchBar}>
                <input type="text" />
                <button><SearchIcon /></button>
            </nav>
            <nav></nav>
        </header>
    );
}

export default Header;