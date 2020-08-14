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

document.body.style.background = "#b8f5d4";

function Welcome() {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      <Container>
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
      </Container>
      <Container text>
        <Header
          as="h1"
          content="Make work, work better"
          inverted
          style={{
            fontSize: "4em",
            color: "gray",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: "3em",
          }}
        />
        <Header
          as="h2"
          content="Assign, track, manage, and resolve tickets effortlessly"
          inverted
          style={{
            fontSize: "1.7em",
            color: "black",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        <Button primary size="huge">
          Submit a Ticket
          <Icon name="right arrow" />
        </Button>
      </Container>
    </>
  );
}

export default Welcome;
