import React from 'react';
import './InfoSection.css';

class InfoSection extends React.Component {
    render() {
        return (
            <div className={"InfoSection " + (this.props.type || "")} id={this.props.id} data-aos="fade-in">
                <div className="InfoSection-header">{this.props.title.toUpperCase()}</div>
                <div className="InfoSection-body">
                    <div className="InfoSection-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoSection;