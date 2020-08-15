import React from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

document.body.style.backgroundImage = require("../pages/Welcomebackground.png");

function Welcome({ loggedIn }) {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      <Container textAlign="center">
        <Header
          as="h1"
          content="Make work, work better"
          inverted
          style={{
            fontSize: "5em",
            color: "white",
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
            fontSize: "2em",
            color: "white",
            fontWeight: "normal",
            marginTop: "1.5em",
          }}
        />
        {/* <Button primary size="huge">
          Submit a Ticket
          <Icon name="right arrow" />
        </Button> */}
      </Container>
      <Container textAlign="center">
        <Header
          as="h2"
          content="Execution is Doing Things Right"
          inverted
          style={{
            fontSize: "3em",
            color: "gray",
            fontWeight: "normal",
            marginTop: "3em",
          }}
        />
      </Container>
    </>
  );
}

export default Welcome;
