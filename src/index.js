import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import NewSet from "./NewSet";
import Login from "./Auth/Login"
import Signup from "./Auth/SignUp"
import Dashboard from "./Components/Dashboard";
import Graphs from "./Components/Graphs";
import Historic from "./Components/Historic";
import MaxReps from "./Components/MaxReps";
import UserMenu from "./Components/UserMenu";
import Social from "./Components/Social";
import NavBar from "./Components/NavBar";
import GraphDash from "./Components/GraphDash";
import Friends from "./Components/Friends";
import UserProfile from "./Components/UserProfile";
import ForgotPassword from "./Auth/ForgotPassword";
import Settings from "./Components/Settings"
import AddFriend from "./Components/AddFriend";

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
          <Route path="/forgotpw" exact component={ForgotPassword} />
          <Route path="/newset" exact component={NewSet} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/graphs" exact component={Graphs} />
          <Route path="/graphdash" exact component={GraphDash} />
          <Route path="/history" exact component={Historic} />
          <Route path="/maxreps" exact component={MaxReps} />
          <Route path="/social" exact component={Social} />
          <Route path="/usermenu" exact component={UserMenu} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/addfriend" exact component={AddFriend} />
          <Route path="/friends" exact component={Friends} />
          <Route path="/userprofile" exact component={UserProfile} />

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
