import { Route } from "react-router-dom";
import styled from "styled-components";
import Loadable from "react-loadable";
import { Loading } from "./";

const StyledMain = styled("main")`
  padding: ${props => props.theme.spacing.large};
`;

const HomeLoadable = Loadable({
  loader: () => import("../pages/home" /* webpackChunkName: 'page__home' */),
  loading: () => Loading
});

const TabsLoadable = Loadable({
  loader: () => import("../pages/tabs" /* webpackChunkName: 'page__tabs' */),
  loading: () => Loading
});

const SomePageLoadable = Loadable({
  loader: () =>
    import("../pages/some-page" /* webpackChunkName: 'page__some-page' */),
  loading: () => Loading
});

const Main = () => (
  <StyledMain>
    <Route path="/" exact component={HomeLoadable} />
    <Route path="/tabs/" component={TabsLoadable} />
    <Route path="/some-page/" component={SomePageLoadable} />
  </StyledMain>
);

export default Main;
