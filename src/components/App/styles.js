import styled, { createGlobalStyle, keyframes } from 'styled-components';

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
    translate: 5% -5%;
  }
  50% {
    transform: rotate(-10deg);
    translate: -5% 5%;
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const GlobalStyles = createGlobalStyle`
  html {
      box-sizing: border-box;
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  body {
      margin: 0;
      font-family: monospace;
  }
`;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;

  animation-name: ${shake};
  animation-duration: 1s;
  animation-iteration-count: 2;
  
  display: grid;
  grid-template-columns: 1fr 143px 625px 143px 1fr;
  grid-template-rows: 1fr 132px 450px 178px 1fr;
`;