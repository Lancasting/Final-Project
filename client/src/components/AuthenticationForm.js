import React from "react";
import { Button, Form, Segment, Message, Header } from "semantic-ui-react";

function AuthenticationForm({
  formSubmit,
  formChange,
  emailError,
  passwordError,
  loggedInError,
  page,
}) {
  return (
    <>
      <Header as="h1" content="HALP Login" textAlign="center" />
      <Form size="large" onSubmit={formSubmit}>
        <Segment stacked>
          <Form.Input
            onChange={formChange}
            name="email"
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Your E-mail address"
            error={emailError}
          />
          <Form.Input
            onChange={formChange}
            name="password"
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Create Password"
            type="password"
            error={passwordError}
          />
          <Button
            color="teal"
            fluid
            size="large"
            type="submit"
            content={page === "login" ? "Login" : "Signup"}
          />
          {page === "login" ? (
            <Message
              error={loggedInError}
              color="red"
              header="Incorrect Username Or Password"
              content="Please Enter A Correct Username Or Password"
            />
          ) : (
            <Message
              error={loggedInError}
              color="red"
              header="Please Enter Valid Email and Password"
              content="password must be over 6 characters. Email Could Already be used"
            />
          )}
        </Segment>
      </Form>
    </>
  );
}

export default AuthenticationForm;
