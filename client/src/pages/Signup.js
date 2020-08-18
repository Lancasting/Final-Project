import React, { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm.js";
import { Helmet } from "react-helmet";
import { Segment } from "semantic-ui-react";
import API from "../utils/API.js";
import "./login.css";

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
      <Segment
        style={{
          maxWidth: "600px",
          marginRight: "auto",
          marginLeft: "auto",
          height: "100%",
        }}
        centered
        basic
      >
        <AuthenticationForm
          formChange={formChange}
          formSubmit={formSubmit}
          emailError={emailError}
          passwordError={passwordError}
          loggedInError={loggedInError}
        />
      </Segment>
    </>
  );
}

export default Signup;
