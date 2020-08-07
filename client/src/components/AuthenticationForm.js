import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";

function AuthenticationForm({ formSubmit, formChange }) {
  return (
    <Form size="large" onSubmit={formSubmit}>
      <Segment stacked>
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
  );
}

export default AuthenticationForm;
