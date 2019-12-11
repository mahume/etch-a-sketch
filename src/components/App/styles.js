import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      margin: 0;
  }
`;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 1fr 143px 625px 143px 1fr;
  grid-template-rows: 1fr 132px 450px 178px 1fr;
`;