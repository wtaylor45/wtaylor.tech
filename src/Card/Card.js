import React from 'react';

const cardStyle = {
    // border: "1px solid gray",
    minHeight: "25vh",
    // width: "100%",
    // background: "rgba(100, 100, 100, 0.5",
    // boxShadow: "2px 2px 5px rgb(50, 50, 50)"
}

const cardTitleStyle = {
    padding: "12px",
    fontWeight: "700",
    fontSize: "calc(12px + 3vmin)",
    height: "50%",
    background: "rgba(0, 0, 0, 0.3)"
}

const cardSubtitleStyle = {
    fontSize: "calc(12px + 1vmin)",
    paddingBottom: "12px",
    textAlign: "center"
}

const cardContentStyle = {
    padding: "12px",
    textAlign: "left"
}

const cardBodyStyle = {
    fontSize: "calc(8px + 1vmin)"
}

const Card = props => (
    <div className="card" style={cardStyle}>
        <div className="card-title accent" style={cardTitleStyle}>{props.title}</div>
        <div className="card-content" style={cardContentStyle}>
            <div className="card-subtitle" style={cardSubtitleStyle}>{props.subtitle}</div>
            <div className="card-body" style={cardBodyStyle}>{props.body}</div>
        </div>
    </div>
);


export default Card;