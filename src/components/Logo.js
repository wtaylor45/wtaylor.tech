import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    position: absolute;
    width: 15vmin;
    height: 15vmin;
    z-index: 9999;
    transition: ${props => props.transition || '.5s'};
    &:hover {
        filter: ${props => props.animate ? `drop-shadow(15px 5px 1px ${props.shadowColor || 'rgba(255, 100, 255, 0.5)'})` : null};
        cursor: pointer;
    }
`

const Logo = props => (
    <a href={props.href}>
        <Img animate={props.animate} shadowColor={props.shadowColor} transition={props.transition} src={props.imgSrc}></Img>
    </a>
);

export default Logo;