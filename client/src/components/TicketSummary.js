import React from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TicketSummary({ _id, priorityLevel, createdBy, status }) {
  return (
    <>
      <List.Item style={{ color: "black", padding: "10px" }}>
        <Grid
          as={Segment}
          style={{ marginTop: 0, marginBottom: 0 }}
          columns="equal"
        >
          <Grid.Column>
            <p style={{ fontWeight: "bolder" }}>Ticket Number</p>
            <Link to={`/tickets/${_id}`}>{_id}</Link>
          </Grid.Column>
          <Grid.Column>
            <p style={{ fontWeight: "bolder" }}>Priority</p>
            <p>{priorityLevel}</p>
          </Grid.Column>
          <Grid.Column>
            <p style={{ fontWeight: "bolder" }}>Status</p>
            <p>{status}</p>
          </Grid.Column>
          <Grid.Column>
            <p style={{ fontWeight: "bolder" }}>Created By</p>
            <p>Email: {createdBy.email}</p>
            <p>ID: {createdBy._id}</p>
          </Grid.Column>
        </Grid>
      </List.Item>
    </>
  );
}

export default TicketSummary;
