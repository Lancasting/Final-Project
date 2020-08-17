import React from "react";
import { List, Segment, Header, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TicketSummary({ _id, priorityLevel, type, status }) {
  return (
    <Segment style={{ color: "black", margin: "10px" }}>
      <List>
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h3" content="Ticket:" />
            <Link to={`/tickets/${_id}`}>{_id}</Link>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h3" content="Status:" />
            <p>{status}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h3" content="Priority Level:" />
            <p>{priorityLevel}</p>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Header as="h3" content="Type:" />
            <p>{type}</p>
          </Grid.Column>
        </Grid>
      </List>
    </Segment>
  );
}

export default TicketSummary;
