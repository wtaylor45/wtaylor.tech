import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const Root = styled.div`
    position: relative;
    min-height: ${props => props.minHeight};
`

const Img = styled(Cover)`
    background-attachment: ${props => (props.isFixed ? 'fixed' : 'scroll')};
    background-image: url(${props => props.imageSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => (props.imageWidth ? `${props.imageWidth}px ${props.imageHeight}px` : 'cover')};
`;

const Content = styled(Cover)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 12px;
    font-size: calc(16px + 2vmin);
`

const Header = styled.div`
    font-size: calc(32px + 10vmin);
    margin: 0;
    align-self: center;
`

const HeroHeader = props => (
    <Root minHeight={props.minHeight}>
        <Img imageSrc={props.imageSrc} />
        <Content>
            Hi, I'm
            <Header>Will Taylor</Header>
        </Content>
    </Root>
)

export default HeroHeader;