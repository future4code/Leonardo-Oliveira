import styled from "styled-components";

export const FormStyle = styled.form`
  .todo-list {
    display: flex;
    align-items: center;
  }

  input {
    background-color: rgb(27, 112, 137);
    border: 0;
    width: 200px;
    height: 50px;
    padding: 0px 20px;
    margin: 20px;
    font-size: 18px;
    border-radius: 10px;
    color: #fff;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  input:focus,
  button:focus {
    outline: none;
  }

  button {
    height: 50px;
    width: 80px;
    border-radius: 5px;
    border: 0;
    background-color: rgb(202, 156, 24);
    cursor: pointer;
    font-weight: bolder;
    color: #fff;
  }
`;
