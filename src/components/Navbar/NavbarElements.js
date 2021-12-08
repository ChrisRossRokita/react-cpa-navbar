import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


/*
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;
*/
export const NavLink = styled(Link)`
  color: red;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

    
    
   export const Nav = styled.div`
  
   background: #000;
   height: 80px;
   display: flex;
   justify-content: space-between;
   padding: 0.5rem calc((100vw - 1000px) / 2);
   z-index: 10;
   color: #3451d2;
   @media screen and (max-width: 768px) {
     
     background-color: #0D2538;
     position: fixed;
     height: 100vh;
     width: 300px
     display: block;
     padding-top: 3.5rem;
     
     top: 0;
     right: 0;
     transform: translate(-100%, 75%);
     font-size: 3.8rem;
     cursor: pointer;

    div {
      width 2rem;
      height: 0.25rem;
        background-color: ${({ open }) => open ? '#ccc' : '#333'};
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
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
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
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
