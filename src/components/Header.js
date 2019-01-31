import React from 'react';
import styled from 'styled-components';

const Cover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Root = styled.div`
    position: relative;
    min-height: ${props => props.minHeight || '20vh'};
`

const Content = styled(Cover)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-weight: 200;
    font-size: calc(16px + 2vmin);
`

const Img = styled(Cover)`
    background-attachment: ${props => (props.isFixed ? 'fixed' : 'scroll')};
    background-image: url(${props => props.imageSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => (props.imageWidth ? `${props.imageWidth}px ${props.imageHeight}px` : 'cover')};
    filter: ${props => props.image !== 'undefined' ? `grayscale(100) brightness(50%)` : `none`};
`

const Header = ({children, minHeight, image}) => (
    <Root minHeight={minHeight}>
        <Img isFixed={true} imageSrc={image}></Img>
        <Content>
            {children}
        </Content>
    </Root>
)

export default Header;