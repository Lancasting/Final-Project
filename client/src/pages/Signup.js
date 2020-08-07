import React, { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm.js";
// import { Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Grid, Header, Image } from "semantic-ui-react";
import API from "../utils/API.js";

function Signup({ setLoggedin }) {
  const [userInformation, setUserInformation] = useState({
    email: null,
    password: null,
  });

  const formChange = (event) => {
    setUserInformation({
      ...userInformation,
      [event.target.name]: event.target.value,
    });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    if (
      userInformation.username &&
      userInformation.email &&
      userInformation.password
    ) {
      API.signup(userInformation)
        .then((results) => {
          console.log(results.data);
          setLoggedin(true);
        })
        .catch((error) => {
          console.log(error.data);
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
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src="/logo.png" /> Create your account
          </Header>
          <AuthenticationForm formChange={formChange} formSubmit={formSubmit} />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Signup;
