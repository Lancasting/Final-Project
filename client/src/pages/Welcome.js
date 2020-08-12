import React from "react";
import NavBar from "../components/NavBar.js";
import { Helmet } from "react-helmet";
import { Button, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

function Welcome() {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      <NavBar loggedIn={false} />
    </>
  );
}

export default Welcome;
