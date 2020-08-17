import React, { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm.js";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Grid, Header, Image } from "semantic-ui-react";
import API from "../utils/API.js";
import logo from "../components/logo.png";
// import { createMedia } from '@artsy/fresnel'
import "./login.css";

// const { MediaContextProvider, Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// });

function Signup({ setLoggedin }) {
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
    if (
      userInformation.email &&
      userInformation.password &&
      userInformation.password >= 6
    ) {
      API.signup(userInformation)
        .then((results) => {
          console.log(results);
          if (!results.data.errors) {
            setLoggedin(true);
          }
        })
        .catch((error) => {
          console.log(error.data);
        });
    } else {
      setLoggedInError(false);
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
            <Image src={logo} width={100} />
            Create your account
          </Header>
          <AuthenticationForm
            formChange={formChange}
            formSubmit={formSubmit}
            emailError={emailError}
            passwordError={passwordError}
            loggedInError={loggedInError}
          />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Signup;
