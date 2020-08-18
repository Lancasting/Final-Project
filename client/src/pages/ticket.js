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
} from "semantic-ui-react";
import { useParams, withRouter } from "react-router-dom";

const disabledInput = {
  pointerEvents: "none",
};

function Ticket({ userInfo, history }) {
  const { id } = useParams();
  const [prevUpdater, setPrevUpdater] = useState("Loading");
  const [ticket, setTicket] = useState({
    assignedTo: { _id: "Loading", email: "Loading" },
    createdBy: { _id: "Loading", email: "Loading" },
    description: "Loading",
    priorityLevel: 4,
    status: "Loading",
    subject: "Loading",
    type: "Loading",
    updatedBy: "Loading",
    updatedDate: "Loading",
    createdDate: "Loading",
  });

  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    API.findOne(id)
      .then(({ data }) => {
        setTicket({
          ...data,
          updatedBy: userInfo._id,
        });
        setPrevUpdater(data.updatedBy.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSave = (event) => {
    event.preventDefault();
    if (ticket.description.length < 6) {
      return setErrors((prevState) => {
        return {
          ...prevState,
          description: "Description Must Be Greater Than 6 Characters",
        };
      });
    }
    setTicket((prevState) => {
      return {
        ...prevState,
        updatedBy: userInfo._id,
      };
    });
    console.log("Updating");
    console.log(ticket);
    console.log("Done");
    API.updateOne(ticket)
      .then(({ data }) => {
        if (data.reason) {
          setErrors({ assigneeError: "Please Enter Valid Assignee" });
        }
        setErrors({});
        history.push("/tickets");
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
  // useEffect(() => console.log(ticket), [ticket]);

  const handleDelete = () => {
    API.deleteOne(ticket)
      .then(() => {
        history.push("/tickets");
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
      <Container as={Segment}>
        <SideBar>
          <Header
            as="h1"
            content={`Ticket: ${ticket._id}`}
            textAlign="center"
          />
          <Form>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Created Date</label>
                <Input
                  style={disabledInput}
                  name="_id"
                  value={ticket.createdDate}
                />
              </Form.Field>
              <Form.Field>
                <label>Updated Date</label>
                <Input
                  style={disabledInput}
                  name="_id"
                  value={ticket.updatedDate}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Created By:</label>
                <Input
                  style={disabledInput}
                  name="createdBy"
                  value={ticket.createdBy.email}
                />
              </Form.Field>
              <Form.Field>
                <label>Updated By:</label>
                <Input
                  style={disabledInput}
                  name="updatedBy"
                  value={prevUpdater}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>assigned To:</label>
                <UserSearchInput
                  assigneeError={errors.assigneeError}
                  placeholder={ticket.assignedTo.email}
                  setTicket={setTicket}
                />
              </Form.Field>
              <Form.Field>
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
                      error={
                        errors.description
                          ? { content: errors.description, color: "red" }
                          : false
                      }
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
                  onChange={handleChange}
                />
              </Form.Field>
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field>
                <label>Status:</label>
                <Dropdown
                  name="status"
                  options={statusOptions}
                  placeholder={ticket.status}
                  selection
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
            </Form.Group>
          </Form>
        </SideBar>
      </Container>
    </div>
  );
}

export default withRouter(Ticket);
