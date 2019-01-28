import React from 'react';
import styled from 'styled-components';
import TwoToneText from './TwoToneText';

const Container = styled.div`
    /* min-height: ${props => props.height || "300px"}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;
`

const Title = styled.div`
    position: relative;
    top: calc(18px + 1vmin);
    font-size: calc(36px + 2vmin);
    line-height: 1;
    z-index: 1;
    text-align: center;
`

const Content = styled.div`
    position: relative;
    top: 0;
    background: #555555aa;
    padding: 12px;
    font-size: calc(8px + 2vmin);
    border-radius: 10px;
    border: 1px solid gray;
    border-top: none;
`

const Text = styled.p`
    text-align: center;
    align-self: center;
    font-weight: 100;
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