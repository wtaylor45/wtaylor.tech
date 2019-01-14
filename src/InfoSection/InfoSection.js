import React from 'react';
import ArrowLink from '../ArrowLink/ArrowLink';
import './InfoSection.css';

class InfoSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"InfoSection " + (this.props.type || "")} id={this.props.id}>
                <div className="InfoSection-header">{this.props.title.toUpperCase()}</div>
                <div className="InfoSection-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default InfoSection;