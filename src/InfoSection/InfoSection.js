import React from 'react';
import './InfoSection.css';

class InfoSection extends React.Component {
    render() {
        return (
            <div className={"InfoSection " + (this.props.type || "")} id={this.props.id}>
                <div className="InfoSection-header">{this.props.title}</div>
                <div className="InfoSection-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default InfoSection;