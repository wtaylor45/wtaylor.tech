import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import logoSrc from '../logo.png';
import img from '../img.jpg';
import data from '../data.json';
import HeroHeader from '../components/HeroHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, } from '@material-ui/core/colors';
import SectionContainer from './SectionContainer';
import Table from '../components/Table';
import web from '../web.svg';
import book from '../book.svg';
import IconTableColumn from '../components/IconTableColumn';
import List from './List';

const AppContainer = styled.div`
  color: white;
  background-color: rgb(50, 50, 50);
  height: 100%;
  width: 100%;
  position: relative;
  font-family: 'Quicksand', sans-serif;
`

const Content = styled.div`
  padding: 2%;
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
            <Content>
              <SectionContainer sections={data.about} />
              <Table>
                <IconTableColumn icon={web} title="Languages I Use" border={true}>
                  <List elements={data.languages} />
                </IconTableColumn>
                <IconTableColumn icon={book} title="Libraries & Tools" border={false}>
                  <List elements={data.tools} />
                </IconTableColumn>
              </Table>
              <SectionContainer sections={data.experience}></SectionContainer>
            </Content>
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}



export default App;
