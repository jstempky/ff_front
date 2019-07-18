import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import NewSet from "./NewSet";
import Login from "./Auth/Login"
import Signup from "./Auth/SignUp"
import Dashboard from "./Reports/Dashboard";
import Graphs from "./Reports/Graphs";
import Historic from "./Reports/Historic";
import MaxReps from "./Reports/MaxReps";
import Menu from "./Reports/Menu";
import Social from "./Reports/Social";


import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/newset" component={NewSet} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/graphs" component={Graphs} />
      <Route path="/history" component={Historic} />
      <Route path="/maxreps" component={MaxReps} />
      <Route path="/social" component={Social} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
