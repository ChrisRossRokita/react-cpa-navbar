import React from 'react';
import { FcAssistant } from "react-icons/fc";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import Burger from './Burger'

const Navbar = () => {
  return (
    <>
    
    
      <Nav>
        <NavLink to="/home">
                <h1><FcAssistant /> Margaret C Rokita CPA MST</h1>
        </NavLink>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      
      
    </>
    
  );
};

export default Navbar;