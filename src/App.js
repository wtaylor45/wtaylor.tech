import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './components/Logo/Logo';
import logoSrc from './logo.png';


const AppContainer = styled.div`
  color: white;
  font-family: 'Roboto', sans-serif;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
          <Logo imgSrc={logoSrc}></Logo>
      </AppContainer>
    );
  }
}



export default App;
