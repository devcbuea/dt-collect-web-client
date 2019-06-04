import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './../assets/styles/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            DEVC<br/>BUEA
        </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight className={this.state.isToggleOn ? 'on' : ''}>
          <NavItem>Home</NavItem>
          <NavItem>Create Account</NavItem>
          <NavItem>About us</NavItem>
          <NavItem>Conctact us</NavItem>
        </Nav>
        <div className="nav-toggle" onClick={this.handleClick}>
          <div className={"hamburger " + (this.state.isToggleOn ? 'on' : '')}></div>
        </div>
      </Navbar>
    );
  }
}
export default Header;