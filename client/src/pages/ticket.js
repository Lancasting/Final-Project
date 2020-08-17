import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Helmet } from "react-helmet";
import SideBar from "../components/SideBar";
import UserSearchInput from "../components/UserSearchInput.js";
import {
  Input,
  Dropdown,
  Button,
  Form,
  Container,
  Segment,
  Modal,
  Header,
  Icon,
  TextArea,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";

function Ticket(userInfo) {
  const { id } = useParams();
  // const [visible, setVisible] = useState(false);
  const [ticket, setTicket] = useState({
    createdBy: [userInfo._id],
    updatedBy: [userInfo.id],
  });
  // const [query, setQuery] = useState({});
  // const [status, setStatus] = useState();
  // const [priority, setPriority] = useState();
  // const [selection, setType] = useState();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    API.findOne(id)
      .then(({ data }) => {
        console.log(data);
        setTicket(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();
    API.updateOne(ticket)
      .then(({ data }) => {
        console.log(data);
        window.location = "/tickets";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event, data) => {
    setTicket((prevState) => {
      return {
        ...prevState,
        [data.name]: data.value,
      };
    });
  };
  useEffect(() => console.log(ticket), [ticket]);

  const handleDelete = () => {
    API.deleteOne(ticket)
      .then(() => {
        console.log("Successfully Deleted");
        window.location = "/tickets";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const statusOptions = [
    { key: 1, text: "New", value: "New" },
    { key: 2, text: "In Progress", value: "In Progress" },
    {
      key: 3,
      text: "Waiting for Customer",
      value: "Waiting for Customer",
    },
    { key: 4, text: "Completed", value: "Completed" },
  ];
  const typeOptions = [
    { key: 1, text: "Hardware", value: "Hardware" },
    { key: 2, text: "Software", value: "Software" },
    { key: 3, text: "Inquiry", value: "Inquiry" },
    { key: 4, text: "Misc.", value: "Misc." },
  ];
  const priorityOptions = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
  ];

  return (
    <div>
      <Helmet>
        <title>HALP - Modify Ticket</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <SideBar>
        <Container as={Segment}>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Created By:</label>
                <Input name="_id" value={ticket._id} disabled />
              </Form.Field>
              <Form.Field>
                <label>Updated By:</label>
                <Input name="updatedBy" value={ticket._id} disabled />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Assignee:</label>
                <UserSearchInput setTicket={setTicket} />
              </Form.Field>
              <Form.Field>
                <label>Description:</label>
                <Modal
                  closeIcon
                  open={open}
                  trigger={<Button>Edit</Button>}
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                >
                  <Header
                    icon="archive"
                    content="Type Description Of Problem"
                  />
                  <Modal.Content>
                    <TextArea
                      style={{ height: "100%", width: "100%" }}
                      name="description"
                      onChange={handleChange}
                      placeholder={ticket.description}
                    />
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="red" onClick={() => setOpen(false)}>
                      <Icon name="remove" /> Cancel
                    </Button>
                    <Button color="green" onClick={() => setOpen(false)}>
                      <Icon name="checkmark" /> Save
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Type:</label>
                <Dropdown
                  name="type"
                  options={typeOptions}
                  placeholder={ticket.type}
                  selection
                  search
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Priority Level:</label>
                <Dropdown
                  name="priorityLevel"
                  options={priorityOptions}
                  placeholder={`${ticket.priorityLevel}`}
                  selection
                  search
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Status:</label>
                <Dropdown
                  name="staus"
                  options={statusOptions}
                  placeholder={ticket.status}
                  selection
                  search
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Subject:</label>
                <Input
                  name="subject"
                  placeholder={ticket.subject}
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Button onClick={handleSave} primary>
                Save
              </Button>
              <Button onClick={handleDelete} inverted color="red">
                Delete
              </Button>
              {/* <Button onClick={handleSave} primary>
                Create
              </Button>
              <Button
                onClick={() => {
                  window.location = "/tickets";
                }}
                inverted
                color="red"
              >
                Cancel
              </Button> */}
            </Form.Group>
          </Form>
        </Container>
        {/* <List> */}
        {/* <List.Item>Subject: {ticket.subject}</List.Item> */}
        {/* <List.Item>{ticket.createdBy.email}</List.Item> */}
        {/* <List.Item>{ticket.updatedBy}</List.Item> */}
        {/* <List.Item>
            Status:
            <Dropdown
              name="status"
              options={statusOptions}
              placeholder={ticket.status}
              selection
              search
              onChange={handleChange}
            />
          </List.Item> */}
        {/* create modal for description */}
        {/* <List.Item>Description: {ticket.description}</List.Item> */}
        {/* <List.Item>
            Priority Level:
            <Dropdown
              name="priorityLevel"
              options={priorityOptions}
              placeholder={`${ticket.priorityLevel}`}
              selection
              search
              onChange={handleChange}
            />
          </List.Item> */}
        {/* <List.Item>
            Type:
            <Dropdown
              name="type"
              options={typeOptions}
              placeholder={ticket.type}
              selection
              search
              onChange={handleChange}
            />
          </List.Item> */}
        {/* <Button onClick={handleSave} primary>
            Save
          </Button>
          <Button onClick={handleDelete} inverted color="red">
            Delete
          </Button>
        </List> */}
      </SideBar>
    </div>
  );
}

export default Ticket;
