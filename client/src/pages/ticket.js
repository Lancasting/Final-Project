import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import API from "../utils/API";
import { Helmet } from "react-helmet";
import {
  Sidebar,
  Menu,
  List,
  Button,
  Sticky,
  Icon,
  Form,
  Dropdown,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";

function Ticket() {
  const { id } = useParams();
  const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [query, setQuery] = useState("/id");
  const [status, setStatus] = useState();
  const [priority, setPriority] = useState();
  const [selection, setType] = useState();

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

  const statusOptions = [
    { key: 1, text: "New", value: "New" },
    { key: 2, text: "In Progress", value: "In Progress" },
    { key: 3, text: "Waiting for Customer", value: "Waiting for Customer" },
    { key: 4, text: "Completed", value: "Completed" },
  ];
  const typeOptions = [
    { key: 1, text: "Hardware", value: "Hardware" },
    { key: 2, text: "Software", value: "Software" },
    { key: 3, text: "Inquiry", value: "Inquiry" },
    { key: 4, text: "Misc.", value: "Misc." },
  ];
  const priorityOptions = [
    { key: 1, text: "1", value: "1" },
    { key: 2, text: "2", value: "2" },
    { key: 3, text: "3", value: "3" },
    { key: 4, text: "4", value: "4" },
    { key: 5, text: "5", value: "5" },
  ];

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
          <Form
            style={{
              backgroundColor: "white",
            }}
          >
            <List>
              <List.Item>Subject: {ticket.subject}</List.Item>
              {/* <List.Item>{ticket.createdBy.email}</List.Item> */}
              {/* <List.Item>{ticket.updatedBy}</List.Item> */}
              <List.Item>
                Status:
                <Dropdown
                  options={statusOptions}
                  placeholder={ticket.status}
                  selection
                  search
                  onChange={(_, { value }) => setStatus(value)}
                />
              </List.Item>
              <List.Item>Description: {ticket.description}</List.Item>
              <List.Item>
                Priority Level:
                <Dropdown
                  options={priorityOptions}
                  placeholder={`${ticket.priorityLevel}`}
                  selection
                  search
                  onChange={(_, { value }) => setPriority(value)}
                />
              </List.Item>
              <List.Item>
                Type:
                <Dropdown
                  options={typeOptions}
                  placeholder={ticket.type}
                  selection
                  search
                  onChange={(_, { value }) => setType(value)}
                />
              </List.Item>
              <Button primary>Save</Button>
              <Button inverted color="red">
                Delete
              </Button>
            </List>
          </Form>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default Ticket;
