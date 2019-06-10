import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #353940;
    color: #FFFFFF;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
