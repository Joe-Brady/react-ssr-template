import { createGlobalStyle, ThemeProvider } from "styled-components";

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
  html, body {
    margin: 0px;
    color: ${props => props.theme.colours.primary};
    font-family: sans-serif;
    font-size: 16px;
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

export default StyleWrapper;
