import React from "react";
import { Container, Image, Header } from "semantic-ui-react";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>HALP - Page Not Found</title>
        <meta name="description" content="Not Found Page of the HALP website" />
      </Helmet>
      <Container textAlign="center">
        <Image
          src="/images/deadEndImage.png"
          alt="Dead End Sing made by Clker-Free-Vector-Images https://pixabay.com/vectors/dead-end-sign-signage-dead-end-44156/"
          size="large"
          centered
        />
        <Header as="h1" content="😥 Page Not Found 😥" />
      </Container>
    </>
  );
}

export default NotFound;
