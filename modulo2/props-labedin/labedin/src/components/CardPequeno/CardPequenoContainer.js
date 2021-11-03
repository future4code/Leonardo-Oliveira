import styled from "styled-components";

export const CardPequenoContainer = styled.div`
  display: flex;
  border: 1px solid black;
  padding: 10px 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  padding-top: 16px;
  height: 80px;
  width: 40%;

  #nome-h4 {
    padding-right: 5px;
  }

  & a {
    position: relative;
    color: #000;
    font-size: 20px;
    transition: 0.3s;
    padding-right: 10px;
    transition-property: transform;
  }

  & a:hover {
    transform: scale(1.5);
  }
`;
