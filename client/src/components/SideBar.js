import React, { useState } from "react";
import { Sidebar, Menu, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

function SideBar({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <Sidebar.Pushable style={{ overflow: "visible" }}>
      <Sidebar
        style={{ overflow: "visible" }}
        as={Menu}
        animation="overlay"
        icon="labeled"
        onHide={() => setVisible(false)}
        inverted
        vertical
        visible={visible}
        width="thin"
        color="blue"
      >
        <Menu.Item as={Link} to="/tickets">
          Search
        </Menu.Item>
        <Menu.Item as={Link} to="/create">
          Create
        </Menu.Item>
        <Menu.Item as={Link} to="/construction">
          Projects
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher
        dimmed={visible}
        color="blue"
        style={{ overflow: "visible" }}
      >
        <Button
          name="sidebarButton"
          onClick={() => setVisible(true)}
          size="tiny"
        >
          <Icon name="sidebar" color="blue" />{" "}
        </Button>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

export default SideBar;

//testing