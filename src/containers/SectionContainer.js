import React, { Component } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        display: block;
    }
`
class SectionContainer extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            sections: []
        }
    }

    componentDidMount(){
        this.setState({
            sections: this.props.sections
        })
    }

    render(){
        return (
            <Container>
                {this.state.sections.map(section => <Section title={section.title}>{section.contents}</Section>)}
            </Container>
        )
    }
}

export default SectionContainer;