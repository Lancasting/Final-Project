import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import Navbar from "../components/NavBar.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import {
  Sidebar,
  Menu,
  List,
  Button,
  Sticky,
  Icon,
  // Rail,
} from "semantic-ui-react";

function TicketQuery() {
  // state of query
  const [visible, setVisible] = useState(false);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    API.getAllTickets()
      .then(({ data }) => {
        console.log(data);
        setTickets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <Navbar loggedIn={true} />
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
          <Sticky>
            <Button
              icon
              labelPosition="right"
              onClick={() => setVisible(true)}
              style={{ zIndex: 1 }}
            >
              Menu
              <Icon name="right arrow" />
            </Button>
          </Sticky>
          <TicketQueryForm />
          <List>
            {tickets.map((ticket) => (
              <TicketSummary key={ticket._id} {...ticket} />
            ))}
          </List>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
}

export default TicketQuery;
