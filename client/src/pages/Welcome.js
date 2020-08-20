import React from "react";
import { Helmet } from "react-helmet";
import { Header, Segment, Grid } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import "./welcome.css";

function Welcome() {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      {/* <Container textAlign="center"> */}
      <Grid.Column
        style={{ height: "90vh", width: "100%", position: "relative" }}
      >
        <Segment
          placeholder
          basic
          textAlign="center"
          style={{ height: "100%", width: "100%" }}
        >
          <Header
            as="h1"
            content="Make work, work better"
            inverted
            style={{
              fontSize: "65px",
              color: "#4d3ce5",
              fontWeight: "bold",
              marginBottom: 0,
              // marginTop: "2em",
            }}
          />
          <h2
            style={{
              fontSize: "2em",
              color: "white",
            }}
          >
            Assign, track, manage, and resolve tickets effortlessly
          </h2>
        </Segment>
      </Grid.Column>
    </>
  );
}

export default Welcome;
