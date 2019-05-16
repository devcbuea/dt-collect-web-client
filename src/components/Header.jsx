import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './../assets/styles/header.css';

const Header = () => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Data Collection Tool
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem> Link One </NavItem>
        <NavItem> Link Two </NavItem>
        <NavItem> Link Three </NavItem>
      </Nav>
    </Navbar>
  );
};
export default Header;