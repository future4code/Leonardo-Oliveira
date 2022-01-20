import styled from "styled-components";

export const FooterContainer = styled.footer`
  & {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-evenly;
    background-color: black;
    width: 100%;
    height: 100px;
    color: #ffffff;
    position: relative;
    left: 0;
    bottom: 0;
  }
  .midias-sociais {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  .midias-sociais a {
    position: relative;
    color: #fff;
    font-size: 25px;
    transition: 0.3s;
    transition-property: transform;
  }
  .midias-sociais a:not(:last-child) {
    margin-right: 60px;
  }
  .midias-sociais a:hover {
    transform: scale(1.5);
  }
`;
