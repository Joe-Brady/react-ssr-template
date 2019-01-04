import Loadable from "react-loadable";
import Loading from "../components/Loading";
import RandomNumber from "../components/RandomNumber";
import ChangeState from "../components/ChangeState";
import ContentGroup from "../components/ContentGroup";
import HintText from "../components/atoms/HintText";

const ClockLoadable = Loadable({
  loader: () => import("../components/Clock" /* webpackChunkName: 'Clock' */),
  loading: () => Loading
});

const Home = () => (
  <div>
    <h1>Home page</h1>

    <ContentGroup spacing="small">
      <h2>Random number component:</h2>
      <RandomNumber />
      <HintText>
        Note that the random number is generated twice - once on the server
        render and again when the client 'hydrates' the window:
      </HintText>
    </ContentGroup>

    <ContentGroup spacing="small">
      <h2>Change state component:</h2>
      <ChangeState />
      <HintText>
        In development mode with hot-reloading, note that the component state is
        maintained when you make a change.
      </HintText>
    </ContentGroup>

    <ContentGroup spacing="small">
      <h2>Clock component:</h2>
      <ClockLoadable />
      <HintText>
        This component is a webpack 'chunk' (via dynamic imports and code
        splitting). See the web inspector's sources tab.
      </HintText>
    </ContentGroup>
  </div>
);

export default Home;
