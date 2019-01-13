import React from 'react';
import './HeroHeader.css';

const HeroHeader = props => (
    <div className="HeroHeader">
        <span className="border">{props.title}</span>
        {props.children}
    </div>
)

export default HeroHeader;