import React from "react";
import logo from "../components/logo.png";
import API from "../utils/API.js";
import { Link } from "react-router-dom";
import { Menu, Image, Button, Container } from "semantic-ui-react";

function Navbar({ loggedIn, setLoggedIn }) {
  const signout = () => {
    API.signout()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
      <Menu secondary>
        <Image as={Link} to="/" src={logo} width={100} />
        {loggedIn ? (
          <>
            <Menu.Item position="right">
              <Button onClick={signout} color="blue">
                Sign-Out
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/tickets" color="blue">
                Tickets
              </Button>
            </Menu.Item>
          </>
        ) : (
          <>
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
          </>
        )}
      </Menu>
    </Container>
  );
}

export default Navbar;
