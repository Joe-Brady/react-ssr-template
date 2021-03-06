import { hot } from "react-hot-loader/root";
import { Nav, Main } from "./components";
import StyleWrapper from "./StyleWrapper";
import Routes from "./Routes";

const App = () => (
  <StyleWrapper>
    <Nav />
    <Main>
      <Routes />
    </Main>
  </StyleWrapper>
);

export default hot(App);
