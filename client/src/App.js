/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
