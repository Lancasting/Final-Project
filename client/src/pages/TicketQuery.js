import React from "react";
import { Helmet } from "react-helmet";
import { Grid, Header, Segment } from "semantic-ui-react";

function TicketQuery() {
  return (
    <>
      <Helmet>
        <title>HALP - Welcome</title>
        <meta name="description" content="Welcome Page of the HALP website" />
      </Helmet>
      <Header
        as="h3"
        content="Nested Stackable Grid"
        // style={style.h3}
        textAlign="center"
      />
      <Grid columns={2}>
        <Grid.Column>
          <Grid columns={2} doubling stackable>
            <Grid.Column>
              <Segment>Submitter</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Date</Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
        <Grid.Column>
          <Grid columns={3} doubling stackable>
            <Grid.Column>
              <Segment>Status</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Time</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Assigned To:</Segment>
            </Grid.Column>
          </Grid>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default TicketQuery;
