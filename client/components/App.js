import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";
import Loading from "./Loading";
import RandomNumber from "./RandomNumber";

const ClockLoadable = Loadable({
  loader: () => import("./Clock" /* webpackChunkName: 'Clock' */),
  loading: () => Loading
});

const ChangeStateLoadable = Loadable({
  loader: () => import("./ChangeState" /* webpackChunkName: 'ChangeState' */),
  loading: () => Loading
});

const App = () => (
  <div>
    <p>This is App.js</p>
    <RandomNumber />
    <ChangeStateLoadable />
    <ClockLoadable />
  </div>
);

export default hot(App);
