import React from 'react';
import { NavBarContainer } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <i className="fas fa-user-astronaut"></i>
      <i className="fas fa-comments"></i>
      <i className="fas fa-user"></i>
    </NavBarContainer>
  );
};

export default NavBar;
