import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";

const options = [
  { key: 0, text: "Show All", value: "" },
  { key: 1, text: "Status", value: "status" },
  { key: 2, text: "Ticket Number", value: "_id" },
  { key: 3, text: "Type", value: "type" },
  { key: 4, text: "Priority Level", value: "priorityLevel" },
];

function TicketQueryForm({ setSelection, setUserInput, formSubmit }) {
  return (
    <Form onSubmit={formSubmit}>
      <Form.Group widths="equal" style={{ margin: "0px", padding: "0" }}>
        <Form.Field>
          <Dropdown
            aria-label="querySelection"
            options={options}
            placeholder="Set Selection"
            selection
            search
            onChange={(_, { value }) => setSelection(value)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            aria-label="search"
            name="search"
            action={{ icon: "search" }}
            placeholder="Search..."
            onChange={(event) => setUserInput(event.target.value)}
          />
        </Form.Field>
      </Form.Group>
    </Form>
  );
}

export default TicketQueryForm;
