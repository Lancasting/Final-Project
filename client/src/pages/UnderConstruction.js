import React from "react";
import { Helmet } from "react-helmet";
import { Container, Header } from "semantic-ui-react";
import "./underconstruction.css";

function UnderConstruction() {
  return (
    <>
      <Helmet>
        <title>HALP - Page Under Construction</title>
        <meta
          name="description"
          content="Page Not Available form the HALP website"
        />
      </Helmet>
      <Container textAlign="center">
        <Header
          as="h2"
          content="Page Under Construction"
          inverted
          style={{
            fontSize: "5em",
            color: "white",
            fontWeight: "normal",
            marginTop: "4em",
          }}
        />
      </Container>
    </>
  );
}

export default UnderConstruction;
