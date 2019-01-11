import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import NormalizeCSS from "./assets/normalize-css";

const theme = {
  colours: {
    primary: "darkslategrey",
    secondary: "white",
    accent: "#81d06a",
    subtle: "lightslategrey"
  },
  spacing: {
    x_large: "10rem",
    large: "5rem",
    medium: "2rem",
    small: "1rem",
    x_small: "0.5rem"
  }
};

const GlobalStyles = createGlobalStyle`
  ${NormalizeCSS};
  
  html, body {
    font-family: sans-serif;
    font-size: 16px;
    color: ${props => props.theme.colours.primary};
  }
`;

const StyleWrapper = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      {props.children}
    </React.Fragment>
  </ThemeProvider>
);

StyleWrapper.propTypes = {
  children: PropTypes.node
};

export default StyleWrapper;
