import styled from "styled-components";

export const LoginPageContainer = styled.div`
  & {
    background: #7159c1;
    color: #fdfdfd;
  }

  .Login-Field {
    border: none;
    background: rgba(0, 0, 0, 0.25);
    color: #fdfdfd;
    margin-top: 1rem;
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    border-radius: 7px;
    transition: all 0.1s linear;
  }

  .Login-Field:focus {
    outline: none;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
  }

  .Login-Error {
    color: #ff8080;
  }

  .Login-Btn {
    background: #00cc99;
    color: #fdfdfd;
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 5px;
    margin-top: 2rem;
  }
  .Login-Btn:hover {
    cursor: pointer;
  }
`;
