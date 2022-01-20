import styled from "styled-components";

export const CardViagemContainer = styled.div`
  & {
    background-color: white;
    border-radius: 10px;
    padding: 1em;
    box-shadow: 0px 10px 5px #b2bec3;
    text-align: center;
    font-family: "Poppins";
  }
  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }
  .strong {
    font-weight: bold;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .image-card {
    max-width: 100%;
    border-radius: 5px;
  }
  .image-card img {
    height: 170px;
  }
  .text-card {
    text-align: left;
    margin-left: 2em;
    margin-bottom: 0.5em;
    font-size: 12px;
  }
`;
