import React from "react";
import { Form, Dropdown, Segment, Input, Container } from "semantic-ui-react";

const options = [
  { key: 0, text: "Show All", value: "" },
  { key: 1, text: "Status", value: "status" },
  { key: 2, text: "Ticket Number", value: "_id" },
  { key: 3, text: "Type", value: "type" },
  { key: 4, text: "Priority Level", value: "priorityLevel" },
];

function TicketQueryForm({ setSelection, setUserInput, formSubmit }) {
  return (
    <Segment style={{ color: "black", margin: "100px", padding: "300px" }}>
      <Form onSubmit={formSubmit}>
        <Form.Group inline>
          <Form.Field>
            <Dropdown
              options={options}
              placeholder="Set Selection"
              selection
              search
              onChange={(_, { value }) => setSelection(value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              name="search"
              action={{ icon: "search" }}
              placeholder="Search..."
              onChange={(event) => setUserInput(event.target.value)}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

export default TicketQueryForm;
