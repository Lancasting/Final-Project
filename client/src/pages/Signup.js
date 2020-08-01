import React from "react";
import { Helmet } from "react-helmet";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

function Signup() {
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
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Name"
                type="Name"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Your E-mail address"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Create Password"
                type="password"
              />

              <Button color="teal" fluid size="large">
                Create Account
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Signup;
