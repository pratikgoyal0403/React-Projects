import React from 'react';
import classes from './Heading.module.css';

const Heading = ({heading})=>{
return <h1 className={classes.Heading}>{heading}</h1>
}

export default Heading;