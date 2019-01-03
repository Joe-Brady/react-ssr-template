import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import App from "./components/App";

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(<App />, document.getElementById("root"));
});
