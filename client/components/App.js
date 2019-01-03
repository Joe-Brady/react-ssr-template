import React from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";

const RandomNumberLoadable = Loadable({
  loader: () => import("./RandomNumber"),
  loading: () => <div>Loading...</div>
});

const ClockLoadable = Loadable({
  loader: () => import("./Clock"),
  loading: () => <div>Loading...</div>
});

const ChangeStateLoadable = Loadable({
  loader: () => import("./ChangeState"),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div>
    <p>This is App.js</p>
    <ChangeStateLoadable />
    <RandomNumberLoadable />
    <ClockLoadable />
  </div>
);

export default hot(App);
