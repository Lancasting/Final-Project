import React from "react";
import { List, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

function TicketSummary() {
  return (
    <>
      <List.Item as={Link} to="/" style={{ color: "black" }}>
        <Grid as={Segment}>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            Ticket Number
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            Ticket Number
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            Ticket Number
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            Ticket Number
          </Grid.Column>
        </Grid>
      </List.Item>
    </>
  );
}

export default TicketSummary;
