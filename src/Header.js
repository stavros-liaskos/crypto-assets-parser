import React, {Component} from 'react';
import logo from './logo.svg';
import './Header.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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
                Home
              </NavItem>
              <NavItem eventKey={2} href="#liquidity">
                Liquidity
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
