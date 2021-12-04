import React from 'react';
import { NavBarContainer } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <i className="fas fa-user-astronaut"></i>
      <i className="fab fa-gratipay"></i>
      <i className="fas fa-user"></i>
    </NavBarContainer>
  );
};

export default NavBar;
