import React from "react"
import styled from "styled-components"

const Text = styled.div`
  color: red;
  font-size: ${props => props.fontSize || `calc(4px + 2vmin)`};
  margin: 20px;
`

const Error = ({ children, fontSize }) => (
  <Text fontSize={fontSize}>{children}</Text>
)

export default Error
