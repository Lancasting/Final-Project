import React, { useState } from "react";
import { Sidebar, Menu } from "semantic-ui-react";

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
        <Menu.Item as="a">Search</Menu.Item>
        <Menu.Item as="a">Projects</Menu.Item>
        <Menu.Item as="a">Create</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={visible}>{children}</Sidebar.Pusher>
    </Sidebar.Pushable>
  );
}

export default SideBar;
