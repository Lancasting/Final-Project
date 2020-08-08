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
            label="Status"
            placeholder="New, Hold, Completed"
          />
          <Form.Input
            id="form-subcomponent-shorthand-input-last-name"
            label="Assigned To"
            placeholder="Ikemous"
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default TicketQueryForm;
