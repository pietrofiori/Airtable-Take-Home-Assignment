import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;

  }

  html {
    font-size: 62.5%;
  }

  body{
    scroll-behavior: smooth;
    line-height: 1.5;
    font-weight: ${(props) => props.theme.fontWeight.regular};
    font-family: ${(props) => props.theme.fontFamilies.manrope};
    font-size: ${(props) => props.theme.fontSizes.body.bodyNormal};
    color: ${(props) => props.theme.colors.dark.dark3};
    -webkit-font-smoothing: antialiased;
  }

  input, button {
    border-radius: ${(props) => props.theme.borderRadius.xs}
  }
  
  input, button, textarea, select {
    font: inherit;
  }

  input { 
    border: 1px solid ${(props) => props.theme.colors.light.light2};
    background-color: ${(props) => props.theme.colors.light.light2};
    outline: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }
 
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img, picture, video, canvas {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .no-scroll {
  overflow: hidden;
}
`;

export default GlobalStyle;
