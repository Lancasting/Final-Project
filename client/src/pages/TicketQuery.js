import React from "react";
import TicketNavbar from "../components/TicketNavbar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import { Helmet } from "react-helmet";
import { Sidebar, Menu, Header, Image } from "semantic-ui-react";

function TicketQuery() {
  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <TicketNavbar />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible={true}
          width="thin"
        >
          <Menu.Item as="a">Search</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
          <Menu.Item as="a">Create</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <TicketQueryForm />
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default TicketQuery;
