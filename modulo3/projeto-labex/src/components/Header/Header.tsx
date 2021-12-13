import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./Header.styled";

const Header = function (): JSX.Element {
  return (
    <HeaderContainer>
      <div>
        <Link className="links" to="/">
          Home
        </Link>
      </div>

      <nav className="navbar">
        <ul>
          <Link className="links" to="/viagem">
            Ver Viagens
          </Link>
          <Link className="links" to="/admin">
            Área do Admin
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
