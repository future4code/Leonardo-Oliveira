import styled from "styled-components";

export const HeaderContainer = styled.header`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #000;
  }

  & .links {
    margin: 0 10px;
    text-decoration: none;
    color: #fff;
  }
`;
