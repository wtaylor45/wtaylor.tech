import React, { Component } from 'react';
import './lib/animate.css';
import './App.css';
import Arrow from './down-arrow.svg';
import InfoSection from './InfoSection/InfoSection';
import Rating from './Rating/Rating';
import Languages from './topLanguages.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="main-header">Hi, I'm <span className="accent">Will</span>.</h1>
          <h2 className="secondary-header">Let me tell you about myself.</h2>
          <a href="#summary">
            <img src={Arrow} alt="arrow-down" className="indicator"></img>
          </a>
        </header>
        <InfoSection title="First and Foremost" id="summary" type="secondary">
          <p>I am a <span className="accent">Software Engineer</span>.</p>
          <br/>
          <p>I have a passion for all things in the <span className="accent-secondary">web development</span> world. 
          I've built frontends from the ground up for a seed stage start up, and worked down in the weeds in <span className="accent-secondary">AWS</span>.</p>
          <br/>
          <p>Let's dive into specifics.</p>

        </InfoSection>
        <InfoSection title="Languages" id="languages">
          {createRatings(Languages, true, "#languages", "slide-right")}
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
