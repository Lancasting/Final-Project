import React from "react";
<<<<<<< HEAD
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
=======
import TicketNavbar from "../components/TicketNavbar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { Sidebar, Menu, Header, Image, List } from "semantic-ui-react";

function TicketQuery() {
  // state of query
  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <TicketNavbar />
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="push"
          icon="labeled"
          inverted
          vertical
          visible={true}
          width="thin"
        >
          <Menu.Item as="a">Search</Menu.Item>
          <Menu.Item as="a">Projects</Menu.Item>
          <Menu.Item as="a">Create</Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <TicketQueryForm />
          <Header as="h3">Application Content</Header>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          <List>
            {/* Map and render Ticket For Each Item <TicketSummary />
              array.map(ticket => <TicketSummary />)
            */}
          </List>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
>>>>>>> 1963c32037d199def43b47fe44c477fbf959f2a2
    </>
  );
}

export default TicketQuery;
