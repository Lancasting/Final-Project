import React from "react";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>HALP - Page Not Found</title>
        <meta name="description" content="Not Found Page of the HALP website" />
      </Helmet>
    </>
  );
}

export default NotFound;
