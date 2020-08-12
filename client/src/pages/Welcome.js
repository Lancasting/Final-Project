import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Menu,
  Image,
  Container,
  Header,
  Icon,
} from "semantic-ui-react";
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
      <Container text>
        <Header
          as="h1"
          content="Imagine-a-Company"
          inverted
          style={{
            fontSize: "4em",
            color: "black",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />
        <Header
          as="h2"
          content="Do whatever you want when you want to."
          inverted
          style={{
            fontSize: "1.7em",
            color: "black",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </>
  );
}

export default Welcome;
