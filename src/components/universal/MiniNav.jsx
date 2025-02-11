// Portfolio.js
import React from 'react';
import { Link } from 'react-scroll'; // Import from react-scroll
import styled from "styled-components";
import Draggable from "react-draggable";

const MiniNav = () => {
    return (
        <Draggable>
        <ContainerRight className="hidden md:block z-10">
        <Nav>
          <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink to="about" smooth={true} duration={500}>
            About
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </Nav>
      </ContainerRight>
      </Draggable>
    )
}
// Styled Components for Mini Navbar
const ContainerLeft = styled.div`
  position: fixed;
  top: 10vh;
  left: 2vh;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent */
  padding: 10px 20px;
  border-radius: 12px;
  z-index: 1000;
`;

const ContainerRight = styled.div`
  position: fixed;
  top: 12vh; /* Keep some spacing from the top */
  right: 2vh; /* Move to the right instead of left */
  transform: translate(0, 0); /* Remove centering effect */
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent */
  padding: 10px 20px;
  border-radius: 12px;
  z-index: 1000;

  display: none;  /* Hidden by default */

  @media (min-width: 1240px) and (min-height: 680px) {  /* Both must be true */
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff69b4; /* Pink hover effect */ 
  }
`;

export default MiniNav;