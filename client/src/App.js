import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import UserProfile from "./pages/UserProfile.js";
import Welcome from "./pages/Welcome.js";
import NotFound from "./pages/NotFound.js";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/account" component={UserProfile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
