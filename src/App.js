import React, { Component } from 'react';
import logo from './logo.svg';
import AnimalContainer from './components/AnimalContainer'
import './App.css';
import { Grid } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Grid>
          <AnimalContainer />
          
        </Grid>
      </div>
    );
  }
}

export default App;
