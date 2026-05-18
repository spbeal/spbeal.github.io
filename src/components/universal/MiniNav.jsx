import React from 'react';
import { Link } from 'react-scroll';
import styled from "styled-components";
import Draggable from "react-draggable";

const MiniNav = () => {
    return (
        <Draggable>
        <ContainerRight className="hidden md:block z-10">
        <Nav>
          <NavLink to="home" smooth="true" duration={500}>
            Home
          </NavLink>
          <NavLink to="about" smooth="true" duration={500}>
            About
          </NavLink>
          <NavLink to="projects" smooth="true" duration={500}>
            Projects
          </NavLink>
          <NavLink to="contact" smooth="true" duration={500}>
            Contact
          </NavLink>
        </Nav>
      </ContainerRight>
      </Draggable>
    )
}

const ContainerRight = styled.div`
  position: fixed;
  top: 12vh;
  right: 2vh;
  transform: translate(0, 0);
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 12px;
  z-index: 1000;

  display: none;

  @media (min-width: 1240px) and (min-height: 680px) {
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
    color: #ff69b4;
  }
`;

export default MiniNav;