import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import TwoToneText from "./TwoToneText"
import Title from "./Title"
import Header from "./Header"
import { withTheme } from "@material-ui/core/styles"
import GitHub from "../images/github.svg"
import Twitter from "../images/twitter.svg"
import LinkedIn from "../images/linkedin.svg"
import { IconList } from "./IconList"

const IntroTitle = styled.div`
  text-align: left;
  align-self: center;
  width: 80vw;
  max-width: 1080px;
  color: white;
  font-weight: 900;
`

const SubTitle = styled.div`
  font-size: calc(8px + 1vmin);
  margin: 0 auto;
  align-self: center;
  text-align: center;
  font-weight: 600;
`

const ResponsiveButton = styled(Button)`
  margin: 16px !important;
  width: 30%;
  max-width: 250px !important;
  min-width: 120px !important;
  align-self: center;
`

const HeroHeader = ({
  minHeight,
  image,
  smImg,
  mdImg,
  lgImg,
  introTitle,
  mainTitle,
  subTitle,
  theme,
  onClick,
}) => {
  const icons = [
    { img: GitHub, link: "https://github.com/wtaylor45/", alt: "GitHub link" },
    {
      img: Twitter,
      link: "https://twitter.com/nothisiswill/",
      alt: "Twitter link",
    },
    {
      img: LinkedIn,
      link: "https://www.linkedin.com/in/wtaylor45/",
      alt: "LinkedIn link",
    },
  ]

  return (
    <Header
      image={image}
      smImg={smImg}
      lgImg={lgImg}
      mdImg={mdImg}
      minHeight={minHeight}
    >
      <IntroTitle>{introTitle}</IntroTitle>
      <Title>
        <TwoToneText
          topColor={theme.palette.primary.light}
          bottomColor={theme.palette.secondary.dark}
        >
          {mainTitle}
        </TwoToneText>
      </Title>
      <SubTitle>{subTitle}</SubTitle>
      <IconList icons={icons} width="30vw" height="30vw" />
      <ResponsiveButton
        onClick={onClick}
        size="large"
        color="primary"
        variant="outlined"
      >
        Say Hi!
      </ResponsiveButton>
    </Header>
  )
}

export default withTheme()(HeroHeader)
