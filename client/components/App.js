import React from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";
import RandomNumber from "./RandomNumber";

const ClockLoadable = Loadable({
  loader: () => import("./Clock" /* webpackChunkName: 'Clock' */),
  loading: () => <div>Loading...</div>
});

const ChangeStateLoadable = Loadable({
  loader: () => import("./ChangeState" /* webpackChunkName: 'ChangeState' */),
  loading: () => <div>Loading...</div>
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
