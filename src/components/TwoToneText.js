import React from 'react';
import styled from 'styled-components';

const Text = styled.span`
    line-height: 1;
    color: ${props => props.topColor};
    filter: ${props => `drop-shadow(2px 2px 0px ${props.bottomColor})`};
`

const TwoToneText = ({children, topColor, bottomColor, fontSize}) => (
    <Text topColor={topColor} bottomColor={bottomColor} fontSize={fontSize}>{children}</Text>
);

export default TwoToneText;