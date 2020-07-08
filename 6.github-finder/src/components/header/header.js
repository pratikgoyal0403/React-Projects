import React from 'react';
import classes from './header.module.css';

const header = ()=>{
    return(
        <header className={classes.header}>
            <nav>
                <h1> Github Finder</h1>
            </nav>
        </header>
    );
}

export default header;