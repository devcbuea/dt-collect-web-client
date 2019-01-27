import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <nav>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
            <NavLink to="/create" activeClassName="is-active">Create Acount  </NavLink>
            <NavLink to="/edit" activeClassName="is-active">About Us  </NavLink>
            <NavLink to="/help" activeClassName="is-active">Contact Us</NavLink>
        </nav>
    </header>
);
export default Header;
