import React, { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm.js";
import API from "../utils/API.js";
import { Helmet } from "react-helmet";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../components/logo.png";
import "./login.css";

function Login({ setLoggedin }) {
  const [userInformation, setUserInformation] = useState({
    email: null,
    password: null,
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loggedInError, setLoggedInError] = useState(true);

  const formChange = (event) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    !userInformation.email ? setEmailError(true) : setEmailError(false);
    !userInformation.password
      ? setPasswordError(true)
      : setPasswordError(false);
    if (userInformation.email && userInformation.password) {
      API.login(userInformation)
        .then((results) => {
          setPasswordError(false);
          setEmailError(false);
          if (results) {
            setLoggedin(true);
            setLoggedInError(true);
          }
        })
        .catch(() => {
          setLoggedInError(false);
          console.log("Incorrect Username/Password");
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>HALP - Login Page</title>
        <meta name="description" content="Login Page Of The HALP Website" />
      </Helmet>
      <Grid
        textAlign="center"
        style={{ height: "125vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450, marginTop: "-300px" }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src={logo} width={100} /> Login to your account
          </Header>
          <AuthenticationForm
            formChange={formChange}
            formSubmit={formSubmit}
            emailError={emailError}
            passwordError={passwordError}
            loggedInError={loggedInError}
            page="login"
          />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Login;
