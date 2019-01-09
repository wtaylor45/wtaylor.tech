import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './InfoSection.css';

class InfoSection extends React.Component {
    render(){
        return (
            <div class="InfoSection" id={"#"+this.props.id}>
                <ScrollAnimation duration={.5} animateIn="fadeIn">
                    <h1 class="InfoSection-header">{this.props.title}</h1>
                    {this.props.children}
                </ScrollAnimation>
            </div>
        )
    }
}

export default InfoSection;