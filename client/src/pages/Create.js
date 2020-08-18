import React, { useState } from "react";
import SideBar from "../components/SideBar.js";
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
import { withRouter } from "react-router-dom";
import Helmet from "react-helmet";
import API from "../utils/API.js";

function Create({ userInfo, history }) {
  const [ticket, setTicket] = useState({
    createdBy: [userInfo._id],
    updatedBy: [userInfo._id],
    assignees: [userInfo._id],
    subject: "Technical Support",
  });
  const [open, setOpen] = useState(false);

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
    { key: 1, text: "1 - High", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3 - Moderate", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5 - Low", value: 5 },
  ];

  const handleSave = (event) => {
    event.preventDefault();
    console.log(ticket);
    API.createTicket(ticket)
      .then(({ data }) => {
        console.log(data);
        history.push(`/tickets/${data._id}`);
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

  return (
    <>
      <Helmet>
        <title>HALP - Create Ticket</title>
        <meta
          name="description"
          content="Create Ticket Page Of The HALP Website"
        />
      </Helmet>
      <SideBar>
        <Container as={Segment}>
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Created By:</label>
                <Input name="_id" value={userInfo._id} disabled />
              </Form.Field>
              <Form.Field>
                <label>Updated By:</label>
                <Input name="updatedBy" value={userInfo._id} disabled />
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
                      placeholder="Tell us more"
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
                  placeholder="Hardware"
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
                  placeholder="4"
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
                  placeholder="New"
                  selection
                  search
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Subject:</label>
                <Input
                  name="subject"
                  placeholder="Technical Support"
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group>
              <Button onClick={handleSave} primary>
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
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </SideBar>
    </>
  );
}

export default withRouter(Create);
