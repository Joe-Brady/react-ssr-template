import Loadable from "react-loadable";
import { Loading } from "../components";
import { ContentGroup } from "../components/atoms";

const ClockLoadable = Loadable({
  loader: () =>
    import("../components/code-split/Clock" /* webpackChunkName: 'component__clock' */),
  loading: () => <Loading />
});

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tab: 1 };

    this.switchToTab = this.switchToTab.bind(this);
  }

  switchToTab(tab) {
    this.setState({
      tab
    });
  }

  render() {
    return (
      <div>
        <h1>Tabs demo</h1>

        <ContentGroup spacing="small">
          <button onClick={() => this.switchToTab(1)}>Switch to tab 1</button>
          <button onClick={() => this.switchToTab(2)}>Switch to tab 2</button>
        </ContentGroup>

        {this.state.tab === 1 && (
          <div>
            <h2>Tab 1</h2>
            <p>
              Check the inspector Network or Sources tab. Note that the clock
              component chunk has not yet been loaded.
            </p>
            <p>Now click on "Switch to tab 2".</p>
          </div>
        )}

        {this.state.tab === 2 && (
          <div>
            <h2>Tab 2</h2>
            <p>The clock component chunk has now loaded.</p>
            <ClockLoadable />
          </div>
        )}
      </div>
    );
  }
}

export default Tabs;
