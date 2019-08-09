import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
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
import NavBar from "./Reports/NavBar";
import GraphDash from "./Reports/GraphDash";
//import BarChart from "./Reports/BarChart"


import * as serviceWorker from "./serviceWorker";

const routing = (
  <div>
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/newset" exact component={NewSet} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/graphs" exact component={Graphs} />
          <Route path="/graphdash" exact component={GraphDash} />
          <Route path="/history" exact component={Historic} />
          <Route path="/maxreps" exact component={MaxReps} />
          <Route path="/social" exact component={Social} />
        </Switch>
      </div>
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
