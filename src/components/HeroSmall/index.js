import React from 'react';
import './heroSmall.css';

function HeroSmall({ title }) {
    return (
        <div className='container'>
            <h2 className='herosmall-title'>{title}</h2>
        </div> 
    );
}

export default HeroSmall;