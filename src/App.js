import React, { Component } from 'react';
import './animate.css';
import './App.css';
import Arrow from './down-arrow.svg';
import InfoSection from './InfoSection/InfoSection';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="main-header">Hi, I'm <p class="accent">Will</p>.</h1>
          <h2 class="secondary-header">Let me tell you about myself.</h2>
          <a href="#summary">
            <img src={Arrow} className="indicator"></img>
          </a>
        </header>
        <InfoSection title="First and Foremost" id="summary">
          <p>I am a <p class="accent">Software Engineer</p>.</p>
          I have a passion for all things in the <p class="accent-secondary">web development</p> world. 
          I've built frontends from the ground up for a seed stage start up, and worked down in the weeds in <p class="accent-secondary">AWS</p>.
          <p>Let's dive into specifics.</p>
        </InfoSection>
      </div>
    );
  }
}

export default App;
