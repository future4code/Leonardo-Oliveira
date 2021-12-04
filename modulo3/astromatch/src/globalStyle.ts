import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  body {
    background: #F5F7FA;
    height: 100vh;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  /* Desktop View */
  @media(min-width: 1025px){
    .photo{
      width: 367px;
      height: 684px;
    }

    &{
      width: 400px;
      margin: auto;
    }

  }

`;

export default GlobalStyle;
