import React from "react"
import styled from "styled-components"

const Cover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Root = styled.div`
  position: relative;
  min-height: ${props => props.minHeight || "20vh"};
`

const Content = styled(Cover)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: calc(16px + 2vmin);
`

const Img = styled(Cover)`
  background-attachment: ${props => (props.isFixed ? "fixed" : "scroll")};
  background-image: url(${props => props.imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${props =>
    props.imageWidth
      ? `${props.imageWidth}px ${props.imageHeight}px`
      : "cover"};
  filter: ${props =>
    props.image !== "undefined" ? `grayscale(100) brightness(50%)` : `none`};

  @media (max-width: 500px) and (min-width: 300px) {
    background-image: url(${props => props.smImg});
  }

  @media (max-width: 800px) and (min-width: 500px) {
    background-image: url(${props => props.mdImg});
  }

  @media (max-width: 1280px) and (min-width: 800px) {
    background-image: url(${props => props.lgImg});
  }
`

const Header = ({
  children,
  isFixed,
  minHeight,
  image,
  smImg,
  mdImg,
  lgImg,
}) => (
  <Root minHeight={minHeight}>
    <Img
      isFixed={isFixed}
      imageSrc={image}
      smImg={smImg || image}
      mdImg={mdImg || image}
      lgImg={lgImg || image}
    />
    <Content>{children}</Content>
  </Root>
)

export default Header
