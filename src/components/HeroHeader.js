import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Cover = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const Root = styled.div`
    position: relative;
    min-height: ${props => props.minHeight || '60vh'};
`

const Img = styled(Cover)`
    background-attachment: ${props => (props.isFixed ? 'fixed' : 'scroll')};
    background-image: url(${props => props.imageSrc});
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${props => (props.imageWidth ? `${props.imageWidth}px ${props.imageHeight}px` : 'cover')};
    filter: blur(1px) grayscale(100) brightness(50%);
`;

const Content = styled(Cover)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-weight: 200;
    font-size: calc(16px + 2vmin);
`

const IntroTitle = styled.div`
    text-align: left;
    align-self: center;
    width: 80vw;
    max-width: 1080px;
`

const MainTitle = styled.div`
    font-size: calc(32px + 7vmin);
    margin: 0 auto;
    align-self: center;
    text-align: center;
    color: #00efff;
    filter: drop-shadow(3px 3px 0px #e600ff55);
`

const SubTitle = styled.div`
    font-size: calc(8px + 1vmin);
    margin: 0 auto;
    align-self: center;
    text-align: center;
`

const ResponsiveButton = styled(Button)`
    margin: 16px !important;
    width: 30%;
    max-width: 250px !important;
    min-width: 100px !important;
    align-self: center;
`

const HeroHeader = ({ minHeight, imageSrc, introTitle, mainTitle, subTitle, isFixed }) => (
    <Root minHeight={minHeight}>
        <Img imageSrc={imageSrc} isFixed={isFixed} />
        <Content>
            <IntroTitle>{introTitle}</IntroTitle>
            <MainTitle>{mainTitle}</MainTitle>
            <SubTitle>{subTitle}</SubTitle>
            <ResponsiveButton size="large" color="primary" variant="outlined">
                Say Hi!
            </ResponsiveButton>
        </Content>
    </Root>
)

export default HeroHeader;