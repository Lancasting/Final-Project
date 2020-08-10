import React from "react";
import logo from "../components/logo.png";
import { Link } from "react-router-dom";
import { Menu, Image, Button } from "semantic-ui-react";

function Navbar() {
  return (
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
  );
}

export default Navbar;
