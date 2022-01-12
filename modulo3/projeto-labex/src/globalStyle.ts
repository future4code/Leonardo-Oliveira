import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .app{
    min-height: calc(100vh - 34px);
  }

  img {
    max-width:100%
  }

  p {
  line-height: 1.8;
  }

  ul{
    list-style-type:none;
  }

  .page-viagem .btn {
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin: 50px 0px 10px;
  }
 /*  .page-viagem .btn:hover {

  } */
  
`;

export default GlobalStyle;
