import React from 'react';
import Arrow from './down-arrow.svg'
import $ from 'jquery';

const arrowClickHandler = (e) => {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#" + e.target.getAttribute('section')).offset().top
    }, 500);
}

const ArrowLink = props => (
    <button onClick={arrowClickHandler} className="link-button">
        <img section={props.section} src={Arrow} alt="arrow-down" className="indicator"></img>
    </button>
)

export default ArrowLink;