import React from 'react';
import Star from './star-full.png';
import StarHalf from './star-half.png';
import StarEmpty from './star-empty.png';

const Rating = props => {
    let delay = props.ordinal*250;
    return (
            <div>
                <span>{props.subject}</span>
                <div>
                    {generateStars(props.rating)}
                </div>
            </div>
    );
}

const generateStars = rating => {
    let stars = [];
    for(let i=0;i<5;i++){
        if(rating-i >= 1) stars.push(createStar('full', i));
        else if(rating-i === .5) stars.push(createStar('half', i));
        else stars.push(createStar('empty', i));
    }
    
    return stars;
}

const createStar = (type, key) => {
    if(type === 'full') 
        return (<img className="Rating-star" alt="full star" src={Star} key={key}></img>)
    if(type === 'half') 
        return (<img className="Rating-star" alt="half-star" src={StarHalf} key={key}></img>)
    if(type === 'empty') 
        return (<img className="Rating-star" alt="empty-star" src={StarEmpty} key={key}></img>)
}

export default Rating;