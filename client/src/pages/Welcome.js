import React from "react";
import { Helmet } from "react-helmet";
import { Button, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

function Welcome() {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      <Menu secondary>
        <Image src={logo} width={100} />
        <Menu.Item position="right">
          <Button as={Link} to="/signup" color="blue">
            Sign up
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button as={Link} to="/login" color="blue">
            Log-in
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default Welcome;
