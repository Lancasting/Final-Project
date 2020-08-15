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
import NavBar from "./components/NavBar.js";
import Welcome from "./pages/Welcome.js";
import Ticket from "./pages/ticket.js";
import NotFound from "./pages/NotFound.js";
import UnderConstruction from "./pages/UnderConstruction.js";
import API from "./utils/API.js";
import "./App.css";

document.body.style.background = "#b8f5d4";

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
      .catch(() => {
        console.log("Could not Verify");
      });
  }, [loggedin]);

  return (
    <Router>
      <NavBar loggedIn={loggedin} setLoggedIn={setLoggedin} />
      <Switch>
        <Route exact path="/">
          <Welcome loggedIn={loggedin} />
        </Route>
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
        <Route exact path="/tickets/:id">
          {!loggedin ? <Redirect to="/login" /> : <Ticket />}
        </Route>
        <Route exact path="/construction">
          <UnderConstruction loggedIn={loggedin} />
        </Route>
        {/* Take Below out before finishing */}
        <Route exact path="/devpath" component={TicketQuery} />
        <Route exact path="/devpathid/:id" component={Ticket} />
        {/* Take Above out before finishing */}
        <Route>
          <NotFound loggedIn={loggedin} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
