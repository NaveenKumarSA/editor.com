import React from "react";

import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import Editor from "./Editor";
import * as serviceWorker from "./serviceWorker";
import DND from "./DND";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
ReactDOM.render(<Editor />, document.getElementById("editor"));

ReactDOM.render(<DND />, document.getElementById("DND"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
