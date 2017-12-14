import React, { Component } from 'react';
import logo from './logo.svg';
import AnimalContainer from './components/AnimalContainer'
import ContactContainer from './components/ContactContainer'
import './App.css';
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home.js'

class App extends Component {
  render() {

    return (


      <div className="App">

        
              

        <Navbar bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>Animals</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}><Link to={'/animals'}>Perros & Gatos</Link></NavItem>
            <NavItem eventKey={2}><Link to={'/contacts'}>Contactos</Link></NavItem>
            <NavDropdown eventKey={3} title="Info" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>


        <Grid>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/animals' component={AnimalContainer} />
          <Route exact path='/contacts' component={ContactContainer} />
        </Switch> 
        </Grid>
      </div>
    );
  }
}

export default App;
