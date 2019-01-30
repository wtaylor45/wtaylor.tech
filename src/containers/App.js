import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import logoSrc from '../logo.png';
import lincoln from '../lincoln.jpg';
import HeroHeader from '../components/HeroHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, cyan, } from '@material-ui/core/colors';
import Section from '../components/Section';
import TechTable from '../components/TechTable';
import tech from '../tech.json';

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
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <Logo animate={true} imgSrc={logoSrc}></Logo>
          <HeroHeader image={lincoln} introTitle="Hi, I'm Will, "
            mainTitle="Software Developer." subTitle="(Also musician, traveler, and New York Jets Fan)"
            minHeight="70vh" isFixed={true} />
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <Section title="About Me">
              Like I said up there, I'm Will. I'm a front-end developer who works mostly in React. I'm currently located in the Washington, D.C.
              area working for Macedon Technologies. I've been programming since I was 12, and have been working on web tech for the past 4 years.
            </Section>
          </Container>
          <Container margin="-200px 0px 0px 0px">
            <TechTable languages={tech.languages} tools={tech.tools} />
            <Section title="Experience">
              placeholder
            </Section>
          </Container>
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <Section title="Beyond Work">
              Having been born in France to a french monther and english father has meant that my life largely revolves around travel. I've been to countless countries on 5 continents where I've had the ability to interact with so many incredible people.
              <br/>
              <br/>
              Aside from programming, my other passions in life are music, and my dog Zeus. I have been playing guitar and making music for 12 years, 
              playing in bands on and off.
              <br/>
              Zeus is my mutt puppy who I rescued in July 2018. He's the best - super cuddly - 
              and if you work with me you might just get to meet him.
            </Section>
          </Container>
          <Container>
            {/* <Grid container direction="row" alignItem="center" >
              <PhotoBoxGrid photos={[espana, lincoln]} />
              <SectionContainer sections={data.experience} />
            </Grid> */}
          </Container>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}



export default App;
