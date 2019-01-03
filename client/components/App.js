import React from "react";
import { hot } from "react-hot-loader/root";
import Loadable from "react-loadable";
import RandomNumber from "./RandomNumber";

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
    {/* Standard component, not code-split, pre-loaded */}
    <RandomNumber />
    {/* Code-split components - only loaded when this area is rendered */}
    <ChangeStateLoadable />
    <ClockLoadable />
  </div>
);

export default hot(App);
