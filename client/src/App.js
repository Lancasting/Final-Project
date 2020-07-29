/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Welcome from "./pages/Welcome.js";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
