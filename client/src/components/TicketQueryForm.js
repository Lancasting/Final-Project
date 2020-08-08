import React from "react";
import { Form } from "semantic-ui-react";

function TicketQueryForm() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Input
            id="form-subcomponent-shorthand-input-first-name"
            label="Ticket Number"
            placeholder="########"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label=""
            placeholder="Last name"
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default TicketQueryForm;
