import React from 'react';
import styled from 'styled-components';
import TwoToneText from './TwoToneText';

const Container = styled.div`
    position: relative;
    height: ${props => props.height || "500px"};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    position: absolute;
    top: 0;
    font-size: calc(36px + 2vmin);
    line-height: 1;
    z-index: 1;
    text-align: center;
`

const Content = styled.div`
    position: absolute;
    top: calc(18px + 2vmin);
    background: #555555aa;
    height: 90%;
    width: 90%;
    padding: 12px;
    font-size: calc(12px + 2vmin);
    box-shadow: 2px 2px 2px black;
`

const Text = styled.p`
    text-align: left;
    align-self: flex-start;
`

const Section = ({title, children}) => (
    <Container>
        <Title>
            <TwoToneText topColor="#00efff" bottomColor="purple">{title.toUpperCase()}</TwoToneText>
        </Title>
        <Content>
            <Text>{children}</Text>
        </Content>
    </Container>
);

export default Section;