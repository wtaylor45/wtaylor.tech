import React, { Component } from 'react';
import './lib/animate.css';
import './App.css';
import Arrow from './down-arrow.svg';
import InfoSection from './InfoSection/InfoSection';
import Rating from './Rating/Rating';
import Languages from './topLanguages.json';
import Pages from './pages.json';
import NavBar from './NavBar/NavBar';
import $ from 'jquery';

class App extends Component {
  arrowClickHandler = (e) => {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#"+e.target.getAttribute('section')).offset().top
    }, 500);
  }

  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <header className="App-header">
          <h1 className="main-header">Hi, I'm <span className="accent">Will</span>.</h1>
          <h2 className="secondary-header">Let me tell you about myself.</h2>
          <button onClick={this.arrowClickHandler} className="link-button">
            <img section={Pages[0].id} src={Arrow} alt="arrow-down" className="indicator"></img>
          </button>
        </header>
        <InfoSection title={Pages[0].name} id={Pages[0].id} type="secondary">
          <p>I am a first and foremost a <span className="accent">Software Engineer</span>.</p>
          <br />
          <span>But I'm also a musician, consultant, certified French AND British AND American person, passionate buffalo sauce enthusist, and much more.</span>
          <br/>
          <br/>
          <p>I have a passion for all things in the <span className="accent-secondary">web development</span> world. 
          I've built frontends from the ground up for a seed stage start up, and worked down in the weeds in <span className="accent-secondary">AWS</span>.</p>
          <br/>
          <p>Let's dive into specifics.</p>
          <button className="link-button">
            <img section={Pages[1].id} src={Arrow} alt="arrow-down" className="indicator" onClick={this.arrowClickHandler}></img>
          </button>
        </InfoSection>
        <InfoSection title={Pages[1].name} id={Pages[1].id}>
          <h2>Languages</h2>
          {createRatings(Languages, true, Pages[1].id, "fade-right")}
        </InfoSection>
      </div>
    );
  }
}

const createRatings = (ratings, animate, parent, animation) => {
  let result = [];

  for(let i in ratings){
    result.push((
      <Rating subject={ratings[i].language} rating={ratings[i].rating}
        animate={animate} parentElement={parent} animation={animation} ordinal={parseInt(i)} key={i}></Rating>
    ));
  }


  return result;
}

export default App;
