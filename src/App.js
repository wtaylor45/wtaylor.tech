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
import StyledListElement from './StyledList/StyledList';

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
              <Ratings title="Languages" data={ratingData.languages} />
              <Ratings title="Libraries" data={ratingData.libraries} />
            </div>
          </InfoSection>
          <InfoSection title={Pages[2].name} id={Pages[2].id} type="primary">
            <div className="StyledList">
              <StyledListElement>
                I have <span className="accent-secondary">excellent written and verbal communication skills</span>. 
              </StyledListElement>
              <StyledListElement>
                I am a <span className="accent">fluent French speaker</span>.
              </StyledListElement>
              <StyledListElement>
                I have experience <span className="accent-secondary">leading small development teams</span>.
              </StyledListElement>
              <StyledListElement showDivider={false}>
                I have <span className="accent">composed and presented countless technical demos</span> to both technical and non-technical audiences.
              </StyledListElement>
            </div>
          </InfoSection>
        </div>
      </div>
    );
  }
}



export default App;
