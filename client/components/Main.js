import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../components/Loading";
import styled from "styled-components";

const StyledMain = styled("main")`
  padding: ${props => props.theme.spacing.large};
`;

const HomeLoadable = Loadable({
  loader: () => import("../pages/home" /* webpackChunkName: 'page_home' */),
  loading: () => Loading
});

const SomePageLoadable = Loadable({
  loader: () =>
    import("../pages/some-page" /* webpackChunkName: 'page_some-page' */),
  loading: () => Loading
});

const Main = () => (
  <StyledMain>
    <Route path="/" exact component={HomeLoadable} />
    <Route path="/some-page/" component={SomePageLoadable} />
  </StyledMain>
);

export default Main;
