import React from "react"
import styled from "styled-components"

const Text = styled.span`
  padding: 3px;
  line-height: 1;
  color: ${props => props.topColor};
  filter: ${props => `drop-shadow(3px 3px 0px ${props.bottomColor})`};
`

const TwoToneText = ({ children, topColor, bottomColor, fontSize }) => (
  <Text topColor={topColor} bottomColor={bottomColor} fontSize={fontSize}>
    {children}
  </Text>
)

export default TwoToneText
