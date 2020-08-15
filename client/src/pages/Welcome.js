import React from "react";
import { Helmet } from "react-helmet";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
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
            fontSize: "7em",
            color: "#4d3ce5",
            fontWeight: "bold",
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
            fontWeight: "bold",
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
            color: "white",
            fontWeight: "normal",
            marginTop: "2em",
          }}
        />
      </Container>
    </>
  );
}

export default Welcome;
