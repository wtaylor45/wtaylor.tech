import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import logoSrc from '../logo.png';
import img from '../img.jpg';
import HeroHeader from '../components/HeroHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, } from '@material-ui/core/colors';
import Section from '../components/Section';


const AppContainer = styled.div`
  color: white;
  background-color: rgb(50, 50, 50);
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Quicksand', sans-serif;
`

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00efff',
    },
    secondary: purple,
    type: 'light'
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
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
            <Logo animate={true} imgSrc={logoSrc}></Logo>
            <HeroHeader imageSrc={img} introTitle="Hi, I'm Will, " 
              mainTitle="Front-End Developer." subTitle="(Also musician, traveler, and New York Jets Fan)"
              minHeight="70vh" isFixed={true} />
            
            <Section title="About Me">
              Like I said up there, I'm Will. I'm a front-end developer who works mostly in React. I'm currently located in the Washington D.C. area
              working for Macedon Technologies.
            </Section>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}



export default App;
