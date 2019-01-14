import React, { Component } from 'react';
import './lib/animate.css';
import './App.css';
import HeroHeader from './HeroHeader/HeroHeader';
import InfoSection from './InfoSection/InfoSection';
import Ratings from './Ratings/Ratings';
import ratingData from './topLanguages.json';
import Pages from './pages.json';
import NavBar from './NavBar/NavBar';
import ArrowLink from './ArrowLink/ArrowLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <div className="App-content">
          <HeroHeader title="Hi, I'm Will.">
            (scroll down to learn more about me)
            <ArrowLink section={Pages[0].id}/>
          </HeroHeader>
          <InfoSection title={Pages[0].name} id={Pages[0].id} nextSection={Pages[1].id} type="secondary">
            <p>I am a first and foremost a <span className="accent">Software Engineer</span>.</p>
            <br />
            <span>But I'm also a musician, consultant, certified French AND British AND American person, passionate buffalo sauce enthusist, and much more.</span>
            <br />
            <br />
            <p>I have a passion for all things in the <span className="accent-secondary">web development</span> world.
              I've built frontends from the ground up for a seed stage start up, and worked down in the weeds in <span className="accent-secondary">AWS</span>.</p>
            <br />
            <p>Let's dive into specifics.</p>
          </InfoSection>
          <InfoSection title={Pages[1].name} id={Pages[1].id} type="primary">
            <div className="flex-row">
              <Ratings title="Languages" data={ratingData.languages} parentElement={Pages[1].id} animation="fade-right" />
              <Ratings title="Libraries" data={ratingData.libraries} parentElement={Pages[1].id} animation="fade-left" />
            </div>
          </InfoSection>
        </div>
      </div>
    );
  }
}



export default App;
