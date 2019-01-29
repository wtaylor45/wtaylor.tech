import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    /* min-height: ${props => props.height || "300px"}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;
    width: 100%;
`

const SectionTitle = styled.div`
    position: relative;
    top: calc(18px + 1vmin);
    font-size: calc(36px + 2vmin);
    line-height: 1;
    z-index: 1;
    text-align: center;
    color: #00efff;
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
    width: 100%;
`

const Text = styled.p`
    text-align: center;
    align-self: center;
    font-weight: 100;
`

const Section = ({title, children}) => (
    <Container>
        <SectionTitle>
            {title.toUpperCase()}
        </SectionTitle>
        <Content>
            <Text>{children}</Text>
        </Content>
    </Container>
);

export default Section;