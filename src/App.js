import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './components/Logo';
import logoSrc from './logo.png';
import lincoln from './lincoln.jpg';
import HeroHeader from './components/HeroHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, cyan, } from '@material-ui/core/colors';
import Section from './components/Section';
import TechTable from './components/TechTable';
import tech from './tech.json';
import PhotoBox from './components/PhotoBox';
import zeus from './zeus.jpeg'
import clog from './clog.jpg';
import selfie from './selfie.jpg';
import Grid from '@material-ui/core/Grid'
import ContactForm from './containers/ContactForm/ContactForm';

const AppContainer = styled.div`
  color: white;
  background-color: rgb(50, 50, 50);
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Quicksand', sans-serif;
`

const Container = styled.div`
  padding: ${props => props.padding || '2%'};
  margin: ${props => props.margin || '0'};
  background: ${props => props.backgroundColor};
  text-align: center;
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan.A400,
      light: cyan.A200,
      dark: cyan.A700
    },
    secondary: purple,
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      label: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  }
});

class App extends Component {
  contactClickHandler(e){
    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Logo animate={true} imgSrc={logoSrc}></Logo>
          <HeroHeader image={lincoln} introTitle="Hi, I'm Will, "
            mainTitle="Software Developer." subTitle="(Also musician, traveler, and New York Jets Fan)"
            minHeight="70vh" onClick={this.contactClickHandler.bind(this)} />
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <Section title="About Me">
              Like I said up there, I'm Will. I'm a software developer who works mostly in JavaScript. I'm currently located in the Washington, D.C.
              area working for Macedon Technologies. I've been programming since I was 12, and have been working on web tech for the past 4 years.
            </Section>
          </Container>
          <Container margin="-200px 0px 0px 0px">
            <TechTable languages={tech.languages} tools={tech.tools} />
            <Section title="Experience">
              For the past nearly 2 years, I have been working as a Senior Technical Consultant at Macedon Technologies. There, I have been designing, building,
              and delivering software to companies and government agencies. I have had the ability to lead small teams of developers, and rack up plenty
              of face time with the clients. It's been an incredible place to learn and grow.
              <br />
              <br />
              Previously, I worked at a seed stage start up called Cyber 20/20. As one of the first employees, I was tasked with building
              the front end from the ground up. The application integrated with a state of the art machine learning system, and was used
              to show users what types of malware was incoming on their network. The front end was built in Angular, and run as an Electron app.
            </Section>
          </Container>
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <Section title="Beyond Work">
              Living in America while having been born in France to a french mother and english father means my life has always revolved around travel. 
              I've been to countless countries on 5 continents where I've had the ability to interact with so many incredible people.
              <br />
              <br />
              Aside from programming, my other passions in life are music and my dog Zeus. I have been playing guitar and making music for 12 years,
              playing in bands on and off.
              <br />
              Zeus is my mutt puppy who I rescued in July 2018. He's the best - super cuddly -
              and if you work with me you might just get to meet him.
            </Section>
          </Container>
          <Container margin="-200px 0px 0px 0px">
            <Grid container direction="row" justify="center">
              <Grid item>
                <PhotoBox image={zeus}>Zeus looking like he's finally accepted that this is his life now</PhotoBox>
              </Grid>
              <Grid item>
                <PhotoBox image={selfie}>You have no idea how cold I was in this</PhotoBox>
              </Grid>
              <Grid item>
                <PhotoBox image={clog}>There's probably a sweet joke using 'Clog' that I could've made here</PhotoBox>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Section title="Reach out to me">
              <ContactForm id="contact" />           
            </Section>           
          </Container>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}



export default App;
