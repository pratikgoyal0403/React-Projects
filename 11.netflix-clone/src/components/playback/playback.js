import React from 'react';
import classes from './playback.module.css';

const playback = ({details})=>{
    let src = `https://www.youtube.com/embed/q-ndfdG1b7M`;

    return(
        <div className={classes.playbackContainer}>
            <iframe src={src}/>
        </div>
    )
}

export default playback;