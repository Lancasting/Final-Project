import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";

const options = [
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
    <>
      <Form>
        <Form.Group>
          <Input
            action={
              <Dropdown
                button
                basic
                floating
                placeholder="Select Search"
                options={options}
                defaultValue="page"
              />
            }
            icon="search"
            iconPosition="left"
            placeholder="Search..."
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default TicketQueryForm;
