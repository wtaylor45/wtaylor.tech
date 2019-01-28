import React, { Component } from 'react';
import styled from 'styled-components';
import ListElement from '../components/ListElement';

const Container =  styled.ul`
    font-size: calc(12px + 2vmin);
    text-align: center;
    padding: 0;
    margin: 0;
`

class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            elements: []
        }
    }

    componentDidMount(){
        this.setState({
            elements: this.props.elements
        })
    }

    render(){
        return (
            <Container>
                {this.state.elements.map(element => <ListElement>{element}</ListElement>)}
            </Container>
        )
    }
}

export default List;