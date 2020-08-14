import React, { useState } from "react";
import NavBar from "../components/NavBar.js";
import { Sidebar, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SideBar({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        inverted
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as={Link} to="/tickets">Search</Menu.Item>
        <Menu.Item as={Link} to="/construction">Projects</Menu.Item>
        <Menu.Item as={Link} to="/construction">Create</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>
        <NavBar loggedIn={true} />
        <Button onClick={() => setVisible(true)} />
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

export default SideBar;
