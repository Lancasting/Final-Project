import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import API from "../utils/API";
import { Helmet } from "react-helmet";
import { Sidebar, Menu, List, Button, Sticky, Icon } from "semantic-ui-react";
import { useParams } from "react-router-dom";

function Ticket() {
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [query, setQuery] = useState("/id");

  useEffect(() => {
    API.findOne(id)
      .then(({ data }) => {
        console.log(data);
        setTicket(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  return (
    <div>
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
          <List>{ticket.updatedDate}</List>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Ticket;
