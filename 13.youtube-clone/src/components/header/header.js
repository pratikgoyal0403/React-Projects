import React from 'react';
import classes from './header.module.css';
import MenuIcon from '@material-ui/icons/Menu';

const Header = ()=>{
    return(
        <header className={classes.headerWrapper}>
            <nav>
                <MenuIcon />
                <img src="./assests/youtube-logo.png" alt="youtube" />
            </nav>
            <nav>

            </nav>
            <nav></nav>
        </header>
    );
}

export default Header;