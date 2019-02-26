import React from "react"
import styled from "styled-components"

const Element = styled.li`
  list-style: none;
`

const ListElement = ({ children }) => <Element>{children}</Element>

export default ListElement
