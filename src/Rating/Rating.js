import React from 'react';
import './Rating.css';
import Star from './star-full.png';
import StarHalf from './star-half.png';
import StarEmpty from './star-empty.png';

const Rating = props => {
    let delay = props.ordinal*250;
    console.log(parseInt(delay))
    return (
            <div data-aos={props.animation} data-aos-delay={delay} data-aos-duration="500" data-aos-anchor={props.parentElement} className="Rating">
                <span className="Rating-label">{props.subject}</span>
                <div className="Rating-stars">
                    {generateStars(props.rating)}
                </div>
            </div>
    );
}

const generateStars = rating => {
    let stars = [];
    for(let i=0;i<5;i++){
        if(rating-i >= 1) stars.push(createStar('full'));
        else if(rating-i === .5) stars.push(createStar('half'));
        else stars.push(createStar('empty'));
    }
    
    return stars;
}

const createStar = type => {
    if(type === 'full') 
        return (<img className="Rating-star" src={Star}></img>)
    if(type === 'half') 
        return (<img className="Rating-star" src={StarHalf}></img>)
    if(type === 'empty') 
        return (<img className="Rating-star" src={StarEmpty}></img>)
}

export default Rating;