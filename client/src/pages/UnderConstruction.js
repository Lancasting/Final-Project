import React from "react";
import { Helmet } from "react-helmet";
import { Container, Header, Image } from "semantic-ui-react";
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
        <Image
          src="/images/constructionImage.png"
          alt="Construction sign made by josethestoryteller https://pixabay.com/illustrations/under-construction-construction-sign-2408059/"
          size="meduim"
          circular
          centered
        />
      </Container>
    </>
  );
}

export default UnderConstruction;
