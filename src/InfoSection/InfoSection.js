import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './InfoSection.css';

class InfoSection extends React.Component {
    render(){
        return (
            <div className={"InfoSection "+(this.props.type || "")} id={this.props.id}>
                <ScrollAnimation duration={.5} animateIn="fadeIn">
                    <div className="InfoSection-body">
                        <h1 className="InfoSection-header">{this.props.title}</h1>
                        {this.props.children}
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default InfoSection;