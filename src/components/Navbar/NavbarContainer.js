import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'


export const Nav = styled.nav`

  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  color: #3451d2;
  @media (max-width: 768px) {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
  flex-flow: column nowrap;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 0.5rem;
  padding-bottom: 32.5rem;
  width: 10px;
  padding-top: 0rem;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 0.88em;
  cursor: pointer;
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
  position: fixed;
  height: 100vh;
  width: 10px;
  display: block; 
  padding-top: 3.5rem;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.15em;
  cursor: pointer;
  background-color: ${({ open }) => open ? 'teal' : 'green'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;

    &:nth-child(1) {
      transform:  ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform:  ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform:  ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  
  }
  `;

export const NavLink = styled(Link)`
 
list-style: none;
display: inline;
flex-flow: row nowrap;
align-items: center; 
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #15cdfc;
}
@media (max-width: 768px;) {

  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;


  flex-flow: column nowrap;
  background-color: red;
  position: fixed;
  top: 0
  right: 0
  width: 300px;
  padding-top: 3.5rem;
} 
`
  

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media (max-width: 768px) {

  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
  flex-flow: column nowrap;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 0.5rem;
  padding-bottom: 32.5rem;
  width: 10px
  display: inline-block;
  padding-top: 0rem;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 0.88em;
  cursor: pointer;
  background-color: ${({ open }) => open ? 'teal' : 'orange'};
  border-radius: 10px;
  transform-origin: 1px;
  transition: all 0.3s linear;
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

const NavbarContainer = () => {
    return (
        <div> 
        <Nav>
        <NavLink to="/home">
                <div> Margaret C Rokita CPA MST</div>
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
        </div>
    )
}

export default NavbarContainer
