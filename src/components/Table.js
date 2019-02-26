import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
  background: #444444;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Table = ({ children }) => <Container>{children}</Container>

export default Table
