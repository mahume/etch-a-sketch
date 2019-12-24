import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Store from './context/Store';
import App from "./components/App/index";

const GlobalStyles = createGlobalStyle`
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

ReactDOM.render(
  <Store>
    <GlobalStyles />
    <App /> 
  </Store>,
  document.getElementById('root')
);
