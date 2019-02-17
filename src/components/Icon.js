import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
    cursor: pointer;
    text-decoration: none;
`

const Img = styled.img`
    width: ${props => props.width || '32px'};
    height: ${props => props.height || '32px'};
`

export const Icon = ({img, link, width, height}) => 
    <Button href={link}>
        <img src={img} width={width} height={height}/>
    </Button>
