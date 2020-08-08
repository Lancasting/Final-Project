import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import TicketQuery from "./pages/TicketQuery";
import Welcome from "./pages/Welcome.js";
import NotFound from "./pages/NotFound.js";
import API from "./utils/API.js";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [loggedin, setLoggedin] = useState();

  useEffect(() => {
    API.checkUser()
      .then((result) => {
        if (result.data) {
          setLoggedin(true);
          return;
        }
        setLoggedin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, loggedin);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login">
          {loggedin ? (
            <Redirect to="/tickets" />
          ) : (
            <Login setLoggedin={setLoggedin} />
          )}
        </Route>
        <Route exact path="/signup">
          {loggedin ? (
            <Redirect to="/login" />
          ) : (
            <Signup setLoggedin={setLoggedin} />
          )}
        </Route>
        <Route exact path="/tickets">
          {!loggedin ? <Redirect to="/login" /> : <TicketQuery />}
        </Route>
        <Route exact path="/devpath" component={TicketQuery} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
