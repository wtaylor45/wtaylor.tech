import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
`

const Img = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`

export const Icon = (icon, link, width, height) => 
    <Button href={link}>
        <Img src={icon} width={width} height={height}/>
    </Button>
