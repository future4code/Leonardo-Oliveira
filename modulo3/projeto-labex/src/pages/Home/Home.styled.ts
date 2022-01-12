import styled from "styled-components";

import planeBackground from "../../assets/plane_01.jpg";

export const HomeContainer = styled.section`
  & {
    background: url(${planeBackground}) no-repeat center/cover;
    height: 600px;
  }

  & .overlay {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 650px;
    text-align: center;
    color: #fff;
  }

  & .overlay h1 {
    font-size: 36px;
    padding-bottom: 20px;
  }
`;
