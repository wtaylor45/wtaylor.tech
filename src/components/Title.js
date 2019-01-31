import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    font-size: calc(32px + 7vmin);
    margin: 0 auto;
    align-self: center;
    text-align: center;
    color: ${props => props.color};
`

const Title = ({children, color}) => (
    <Div color={color}>{children}</Div>
)

export default Title;