import Loadable from "react-loadable";
import Loading from "../components/Loading";
import RandomNumber from "../components/RandomNumber";

const ClockLoadable = Loadable({
  loader: () => import("../components/Clock" /* webpackChunkName: 'Clock' */),
  loading: () => Loading
});

const ChangeStateLoadable = Loadable({
  loader: () =>
    import("../components/ChangeState" /* webpackChunkName: 'ChangeState' */),
  loading: () => Loading
});

const Home = () => (
  <div>
    <h1>Home page</h1>
    <RandomNumber />
    <ChangeStateLoadable />
    <ClockLoadable />
  </div>
);

export default Home;
