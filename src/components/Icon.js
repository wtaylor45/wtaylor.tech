import React from "react"
import styled from "styled-components"

const Button = styled.a`
  cursor: pointer;
  text-decoration: none;
`

export const Icon = ({ img, alt, link, width, height }) => (
  <Button href={link}>
    <img src={img} width={width} height={height} alt={alt} />
  </Button>
)
