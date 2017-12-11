import React, { Component } from 'react';
import logo from './logo.svg';
import AnimalContainer from './components/AnimalContainer'
import ContactContainer from './components/ContactContainer'
import './App.css';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

class App extends Component {
  render() {


    





    return (


      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
              

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Perros</NavItem>
            <NavItem eventKey={2} href="#">Gatos</NavItem>
            <NavDropdown eventKey={3} title="Contactos" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>


        <Grid>
          <AnimalContainer />
          <ContactContainer />
          
        </Grid>
      </div>
    );
  }
}

export default App;
