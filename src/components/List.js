import React from 'react';
import styled from 'styled-components';
import ListElement from './ListElement';

const Container = styled.ul`
    font-size: calc(12px + 2vmin);
    text-align: center;
    padding: 0;
    margin: 0;
`

const List = ({ elements }) =>
    <Container>
        {elements.map((element, i) => <ListElement key={i}>{element}</ListElement>)}
    </Container>

export default List;