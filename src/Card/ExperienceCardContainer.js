import React from 'react';
import Card from './Card';
import './ExperienceCard.css';

const subtitleStyle = {
    textAlign: "left",
}

const durationStyle = {
    color: 'rgb(200, 200, 200)'
}

class ExperienceCardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            experience: this.props.experience
        }
    }

    createSubtitle(title, duration){
        return (
            <div className="experience-subtitle" style={subtitleStyle}>
                <div>{title}</div>
                <div className="experience-duration" style={durationStyle}>{duration}</div>
            </div>
        )
    }

    render(){
        return (
            <div className="card-list">
                {
                    this.state.experience.map((job, i) => (
                        <Card key={i} title={job.company.toUpperCase()} subtitle={this.createSubtitle(job.title, job.duration)} 
                            body={job.desc}></Card>
                    )
                )}
            </div>
        )
    }
}

export default ExperienceCardContainer;