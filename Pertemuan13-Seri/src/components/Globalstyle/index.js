// import createGlobalStyle
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
// css reset, font
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

`;
export default GlobalStyle;
