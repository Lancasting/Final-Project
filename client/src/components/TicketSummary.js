import React from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TicketSummary({ _id, priorityLevel, createBy, status }) {
  return (
    <>
      <List.Item as={Link} to="/" style={{ color: "black" }}>
        <Grid as={Segment}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p>Ticket</p>
            <p>{_id}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p>Status</p>
            <p>{status}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p>Priority</p>
            <p>{priorityLevel}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <p>Created By</p>
            <p>{createBy}</p>
          </Grid.Column>
        </Grid>
      </List.Item>
    </>
  );
}

export default TicketSummary;
