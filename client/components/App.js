import { hot } from "react-hot-loader/root";
import Nav from "./Nav";
import Main from "./Main";

import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0px;
    color: ${props => props.theme.colours.primary};
    font-family: sans-serif;
    font-size: 16px;
  }
`;

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

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <Main />
    </React.Fragment>
  </ThemeProvider>
);

export default hot(App);
