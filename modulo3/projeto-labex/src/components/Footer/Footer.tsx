/* eslint-disable react/button-has-type */
import { FooterContainer } from "./Footer.styled";

const Footer = function (): JSX.Element {
  return (
    <FooterContainer>
      <div className="midias-sociais">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram" />
        </a>
        <p>© 2021 Labex S.A</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
