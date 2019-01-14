import React from 'react';
import './StyledListElement.css';

const StyledListElement = props => (
    <div className="StyledListElement">
        <p className="StyledListElement-content">{props.children}</p>
        {props.showDivider || props.showDivider === undefined ? (<hr />) : null}
    </div>
)

export default StyledListElement;