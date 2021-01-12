import React from 'react';

import './MenuItemStyle.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' 
             style={{backgroundImage: `url(${imageUrl})`}}
        />
        <div className='content'>
            <h1 className='title'> {title} </h1>
            <span className='subtitle'> Shop </span>
        </div>
    </div>
);

export default MenuItem;