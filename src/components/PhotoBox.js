import React from 'react';
import styled from 'styled-components';

const Img = styled.div`
    background-color: gray;
    background-image: ${props => props.image};
    width: ${props => props.width || "auto"};
    height: ${props => props.width || "auto"};
    border-radius: 10px;
`

const PhotoBox = ({image, width}) => (
    <Img width={width} image={image} />
)

export default PhotoBox;