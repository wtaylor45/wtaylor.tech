import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    position: fixed;
    width: 15vmin;
    height: 15vmin;
    transition: ${props => props.transition || '.5s'};
    &:hover {
        filter: drop-shadow(15px 5px 0px #cc00e255);
    }
`

const Logo = props => (
    <a href={props.href}>
        <Img transition={props.transition} src={props.imgSrc}></Img>
    </a>
);

export default Logo;