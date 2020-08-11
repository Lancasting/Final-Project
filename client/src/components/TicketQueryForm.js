import React from "react";
import { Form, Dropdown, Segment, Input } from "semantic-ui-react";

const options = [
  { key: 0, text: "", value: "" },
  { key: 1, text: "Status", value: "status" },
  { key: 2, text: "Ticket Number", value: "ticketNumber" },
  { key: 3, text: "Assignee", value: "assignee" },
  { key: 4, text: "Created By", value: "createdBy" },
  { key: 5, text: "Updated By", value: "updatedBy" },
  { key: 6, text: "Created Date", value: "createdDate" },
  { key: 7, text: "Updated Date", value: "updatedDate" },
  { key: 8, text: "Priority Level", value: "priorityLevel" },
];

function TicketQueryForm() {
  return (
    <Segment>
      <Form>
        <Form.Group inline>
          <Form.Field>
            <Dropdown
              placeholder="Select Filter"
              search
              selection
              options={options}
            />
          </Form.Field>
          <Form.Field>
            <Input action={{ icon: "search" }} placeholder="Search..." />
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

export default TicketQueryForm;
