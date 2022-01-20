import styled from "styled-components";

export const Listsyle = styled.div`
  .list {
    color: #fff;
    width: 300px;
    margin: 20px auto;
    height: 50px;
    background-color: #bf07ac;
    border-radius: 5px;
  }
  .list p {
    padding: 10px;
    position: relative;
    transition: ease-in-out;
  }
  .list p input {
    background-color: transparent;
    border: 0;
    color: #fff;
    font-size: 18px;
  }
  .list p input:focus {
    outline: none;
  }
  .list p span {
    position: absolute;
    right: 10px;
  }
  .faicons {
    margin: 0 5px;
    font-size: 15px;
    cursor: pointer;
  }
  .itemsAnim-enter {
    opacity: 0.01;
  }
  .itemsAnim-enter .itemsAnim-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .itemsAnim-leave {
    opacity: 1;
  }
  .itemsAnim-leave .itemsAnim-leave-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`;
