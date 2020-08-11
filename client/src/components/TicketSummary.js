import React from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TicketSummary({ _id, priorityLevel, createBy, status }) {
  return (
    <>
      <List.Item style={{ color: "black", padding: "10px" }}>
        <Grid as={Segment} style={{ marginTop: 0, marginBottom: 0 }}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p style={{ fontWeight: "bolder" }}>Ticket</p>
            <Link to="/">{_id}</Link>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p style={{ fontWeight: "bolder" }}>Priority</p>
            <p>{priorityLevel}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p style={{ fontWeight: "bolder" }}>Status</p>
            <p>{status}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p style={{ fontWeight: "bolder" }}>Created By</p>
            <p>{createBy}</p>
          </Grid.Column>
        </Grid>
      </List.Item>
    </>
  );
}

export default TicketSummary;
