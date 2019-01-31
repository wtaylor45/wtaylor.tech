import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 10px;
    min-height: 200px;
    width: ${props => props.width || '100%'};
    height: ${props => props.width || '25vw'};
    object-fit: cover;

    &:hover {
        transition: .5s;
        filter: brightness(130%);
    }
`

const Container = styled.div`
    min-width: 200px;
    min-height: 250px;
    width: ${props => props.width || '25vw'};
    /* height: ${props => props.height || '40vw'}; */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #555;
    text-align: center;
    margin: 2vw;
`

const Text = styled.div`
    display: block;
    padding: 12px;
    font-size: calc(6px + 2vmin);
`

const PhotoBox = ({children, image, width, height}) => (
    <Container width={width} height={height}>
        <Img src={image} />
        <Text>{children}</Text>
    </Container>
)

export default PhotoBox;