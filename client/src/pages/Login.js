import React, { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm.js";
import API from "../utils/API.js";
import { Helmet } from "react-helmet";
import { Grid, Header, Image } from "semantic-ui-react";
import logo from "../components/logo.png";

function Login({ setLoggedin }) {
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
    if (userInformation.email && userInformation.password) {
      API.login(userInformation)
        .then((results) => {
          console.log(results);
          if (results) {
            setLoggedin(true);
          }
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
        <Grid.Column style={{ maxWidth: 450, marginTop: "-500px" }}>
          <Header as="h2" color="blue" textAlign="center">
            <Image src={logo} width={100} /> Login to your account
          </Header>
          <AuthenticationForm formChange={formChange} formSubmit={formSubmit} />
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Login;
