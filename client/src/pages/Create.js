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
  Message,
  Confirm,
  Grid,
} from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import {
  STATUS_OPTIONS,
  TYPE_OPTIONS,
  PRIORITY_OPTIONS,
} from "../utils/OptionVariables.js";
import Helmet from "react-helmet";
import API from "../utils/API.js";
import "./TicketQuery.css";

function Create({ userInfo, history }) {
  const [ticket, setTicket] = useState({
    createdBy: [userInfo._id],
    updatedBy: [userInfo._id],
    assignedTo: [userInfo._id],
    subject: "Technical Support",
  });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    console.log(ticket);
    API.createTicket(ticket)
      .then(({ data }) => {
        if (data.errors) {
          return setErrors(data.errors);
        }
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
      <Grid.Column
        style={{ height: "90vh", width: "100%", position: "relative" }}
      >
        <Container as={Segment}>
          <SideBar>
            <Header as="h1" content="Creating Ticket" />
            <Form>
              <Form.Group widths="equal">
                <Form.Field className="createcontainer">
                  <label>Created By:</label>
                  <Input
                    style={{ pointerEvents: "none" }}
                    name="_id"
                    value={userInfo.email}
                  />
                </Form.Field>
                <Form.Field className="createcontainer">
                  <label>Updated By:</label>
                  <Input
                    style={{ pointerEvents: "none" }}
                    name="updatedBy"
                    value={userInfo.email}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field className="createcontainer">
                  <label>Assigned To:</label>
                  <UserSearchInput
                    assigneeError={errors.assignedTo}
                    setTicket={setTicket}
                  />
                </Form.Field>
                <Form.Field className="createcontainer">
                  <label>Status:</label>
                  <Dropdown
                    name="staus"
                    options={STATUS_OPTIONS}
                    placeholder="New"
                    selection
                    onChange={handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field className="createcontainer">
                  <label>Type:</label>
                  <Dropdown
                    name="type"
                    options={TYPE_OPTIONS}
                    placeholder="Hardware"
                    selection
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field className="createcontainer">
                  <label>Priority Level:</label>
                  <Dropdown
                    name="priorityLevel"
                    options={PRIORITY_OPTIONS}
                    placeholder="5"
                    selection
                    onChange={handleChange}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Field className="createcontainer">
                  <label>Subject:</label>
                  <Input
                    name="subject"
                    placeholder="Technical Support"
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field className="createcontainer">
                  <label>Description:</label>
                  <Modal
                    closeIcon
                    open={open}
                    trigger={
                      <Button color={errors.description ? "red" : "grey"}>
                        Edit
                      </Button>
                    }
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                  >
                    <Header
                      icon="archive"
                      content="Type Description Of Problem"
                    />
                    <Modal.Content>
                      <Form.TextArea
                        style={{ height: "100%", width: "100%" }}
                        name="description"
                        onChange={handleChange}
                        placeholder="Tell us more"
                        //infinite prettier issue
                        error={
                          errors.description
                            ? {
                              content: errors.description.properties.message,
                              color: "red",
                            }
                            : false
                        }
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
                <Message
                  error
                  header="Action Forbidden"
                  content="You can only sign up for an account once with a given e-mail address."
                />
              </Form.Group>
              <Form.Group>
                <Button onClick={handleSave} primary>
                  Create
                </Button>
                <Button
                  onClick={() => setShowConfirm(true)}
                  inverted
                  color="red"
                >
                  Cancel
                </Button>
                <Confirm
                  open={showConfirm}
                  cancelButton="No!"
                  confirmButton="Yes This Was A Mistake"
                  onCancel={() => setShowConfirm(false)}
                  onConfirm={() => history.push("/tickets")}
                />
              </Form.Group>
            </Form>
          </SideBar>
        </Container>
      </Grid.Column>
    </>
  );
}

export default withRouter(Create);
