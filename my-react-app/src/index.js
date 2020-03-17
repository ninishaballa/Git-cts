import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import App1 from "./Components/App1";
import * as serviceWorker from "./serviceWorker";

//import Hello from "./Components/helloworld";
//import Cinema from "./Components/movies";
//import Counters from "./Components/counters";
//import Counters from "./Components/counters";

//import "./bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
//import "../node_modules/bootstrap/dist/js/bootstrap.js";

//ReactDOM.render(<App />, document.getElementById("root"));

//ReactDOM.render(<Hello />, document.getElementById("root"));
//ReactDOM.render(<Cinema />, document.getElementById("root"));
//ReactDOM.render(<Counters />, document.getElementById("root"));
ReactDOM.render(<App1 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
