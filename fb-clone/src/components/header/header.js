import React from 'react';
import classes from './header.module.css';


const Header = ()=>{
    return(
        <header className={classes.headerContainer}>
            <nav>
               <img src="logo.png" alt="facebook logo"/>
            </nav>
            <ul className={classes.navigation}>
                <li className={[classes.listItem, classes.activeLink].join(' ')}><a href="/"><i className="fa fa-home"></i></a></li>
            </ul>
           <ul className={classes.navigation}>
               <li className={classes.listItem}><a href="/login">Login</a></li>
               <li className={classes.listItem}><a href="/signup">Signup</a></li>
           </ul>
        </header>
    );
}

export default Header;