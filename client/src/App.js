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
import Create from "./pages/Create.js";
import Ticket from "./pages/ticket.js";
import NotFound from "./pages/NotFound.js";
import UnderConstruction from "./pages/UnderConstruction.js";
import TotallyAwesomeContainer from "./components/TotallyAwesomeContainer.js";
import API from "./utils/API.js";
import "./App.css";

function App() {
  const [loggedin, setLoggedin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    API.checkUser()
      .then((result) => {
        setUserInfo(result.data);
        if (result.data && !loggedin) {
          setUserInfo(result.data);
          setLoggedin(true);
        }
      })
      .catch(() => {
        console.log("Could not Verify");
      });
  }, [loggedin]);

  return (
    <TotallyAwesomeContainer>
      <Router>
        <NavBar loggedIn={loggedin} setLoggedIn={setLoggedin} />
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
          <Route exact path="/tickets/:id">
            {!loggedin ? (
              <Redirect to="/login" />
            ) : (
              <Ticket userInfo={userInfo} />
            )}
          </Route>
          <Route exact path="/create">
            {!loggedin ? (
              <Redirect to="/login" />
            ) : (
              <Create userInfo={userInfo} />
            )}
          </Route>
          <Route exact path="/construction">
            <UnderConstruction loggedIn={loggedin} />
          </Route>
          {/* Take Below out before finishing */}
          <Route exact path="/devpath" component={TicketQuery} />
          <Route exact path="/devpath/create" component={Create} />
          <Route exact path="/devpathid/:id" component={Ticket} />
          {/* Take Above out before finishing */}
          <Route>
            <NotFound loggedIn={loggedin} />
          </Route>
        </Switch>
      </Router>
    </TotallyAwesomeContainer>
  );
}

export default App;
