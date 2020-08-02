import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
import API from "../utils/API.js";

function Signup() {
  const [userInformation, setUserInformation] = useState({
    username: null,
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
    console.log(userInformation);
    if (
      userInformation.username &&
      userInformation.email &&
      userInformation.password
    ) {
      API.signup(userInformation);
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
          <Form size="large" onSubmit={formSubmit}>
            <Segment stacked>
              <Form.Input
                onChange={formChange}
                name="username"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Name"
                type="Name"
              />
              <Form.Input
                onChange={formChange}
                name="email"
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Your E-mail address"
              />
              <Form.Input
                onChange={formChange}
                name="password"
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Create Password"
                type="password"
              />
              <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                content="Create Account"
              />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Signup;
