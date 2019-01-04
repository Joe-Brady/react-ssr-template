import { hot } from "react-hot-loader/root";
import { Nav, Main } from "./components";
import StyleWrapper from "./style-wrapper";

const App = () => (
  <StyleWrapper>
    <Nav />
    <Main />
  </StyleWrapper>
);

export default hot(App);
