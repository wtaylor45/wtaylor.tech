import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right-color: gray;
  border-right-style: solid;
  border-right-width: ${props => (props.border ? "1px" : "0px")};
  padding: 16px;
  width: 100%;

  @media screen and (max-width: 768px) {
    border: none;
    border-bottom-color: gray;
    border-bottom-style: solid;
    border-bottom-width: ${props => (props.border ? "1px" : "0px")};
  }
`

const TableColumn = ({ children, border, title }) => (
  <Container border={border}>{children}</Container>
)

export default TableColumn
