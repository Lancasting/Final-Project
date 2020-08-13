import React from "react";
import NavBar from "../components/NavBar.js";
import { Helmet } from "react-helmet";

function UnderConstruction({ loggedIn }) {
  return (
    <>
      <Helmet>
        <title>HALP - Page Under Construction</title>
        <meta
          name="description"
          content="Page Not Available form the HALP website"
        />
      </Helmet>
      <NavBar loggedIn={loggedIn} />
    </>
  );
}

export default UnderConstruction;
