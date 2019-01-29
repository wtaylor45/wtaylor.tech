import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import logoSrc from '../logo.png';
import lincoln from '../lincoln.jpg';
import data from '../data.json';
import HeroHeader from '../components/HeroHeader';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { purple, cyan, } from '@material-ui/core/colors';
import SectionContainer from './SectionContainer';
import Table from '../components/Table';
import web from '../web.svg';
import book from '../book.svg';
import IconTableColumn from '../components/IconTableColumn';
import List from './List';
// import PhotoBoxGrid from '../components/PhotoBoxGrid';
// import Grid from '@material-ui/core/Grid';

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
            mainTitle="Front-End Developer." subTitle="(Also musician, traveler, and New York Jets Fan)"
            minHeight="70vh" isFixed={true} />
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <SectionContainer sections={data.about} />
          </Container>
          <Container margin="-200px 0px 0px 0px">
            <Table>
              <IconTableColumn icon={web} title="Languages I Use" border={true}>
                <List elements={data.languages} />
              </IconTableColumn>
              <IconTableColumn icon={book} title="Libraries & Tools" border={false}>
                <List elements={data.tools} />
              </IconTableColumn>
            </Table>
            <SectionContainer sections={data.experience}></SectionContainer>
          </Container>
          <Container backgroundColor={theme.palette.primary.dark} padding="24px 24px 200px 24px">
            <SectionContainer sections={data.beyondWork} />
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
