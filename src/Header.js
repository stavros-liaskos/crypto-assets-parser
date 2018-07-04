import React, {Component} from 'react';
import logo from './logo.svg';
import './Header.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home"><img src={logo} className="header-logo" alt="logo"/></a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Market overview
              </NavItem>
              <NavItem eventKey={2} href="#liquidity">
                Liquidity
              </NavItem>

              <NavDropdown eventKey={3} title="Coins" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>10</MenuItem>
                <MenuItem eventKey={3.2}>50</MenuItem>
                <MenuItem eventKey={3.3}>100</MenuItem>
                <MenuItem eventKey={3.3}>All</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
