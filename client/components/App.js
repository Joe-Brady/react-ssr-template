import React from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";

const MyComponentLoadable = Loadable({
  loader: () => import("./MyComponent"),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div>
    <p>This is App.js</p>
    <MyComponentLoadable />
  </div>
);

export default hot(App);
