import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";
import TicketNavbar from "../components/TicketNavbar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import Navbar from "../components/NavBar.js";
// import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { Sidebar, Menu, Header, Image, List, Button } from "semantic-ui-react";

function TicketQuery() {
  // state of query
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <Navbar />
      <TicketNavbar />
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
        <Sidebar.Pusher dimmed={visible}>
          {/* <Button icon labelPosition="right" onClick={() => setVisible(true)} style={{ position: "absolute", zIndex: 1, top: "50%", left: "-6%" }}>
            Menu
            <Icon name="right arrow" />
          </Button> */}
          <TicketQueryForm />
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          <List>
            {/* Map and render Ticket For Each Item <TicketSummary />
              array.map(ticket => <TicketSummary />)
            */}
          </List>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default TicketQuery;
