import React from 'react';
import Rating from './Rating/Rating';
import './Ratings.css';

const Ratings = props => {
    return (
        <div className="Ratings-container">
            <h2>{props.title}</h2>
            {createRatings(props.data, true, props.parentElement, props.animation)}
        </div>
    )
}

const createRatings = (ratings, animate, parent, animation) => {
    let result = [];

    for (let i in ratings) {
        result.push((
            <Rating subject={ratings[i].subject} rating={ratings[i].rating}
                animate={animate} parentElement={parent} animation={animation} ordinal={parseInt(i)} key={i}></Rating>
        ));
    }


    return result;
}

export default Ratings;