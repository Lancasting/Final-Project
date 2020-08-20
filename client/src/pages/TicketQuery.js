import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import SideBar from "../components/SideBar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { Grid, Segment } from "semantic-ui-react";
import "./TicketQuery.css";

function TicketQuery() {
  // state of query
  const [tickets, setTickets] = useState([]);
  const [selection, setSelection] = useState();
  const [userInput, setUserInput] = useState();
  const [query, setQuery] = useState({});

  useEffect(() => {
    API.getAllTickets(query)
      .then(({ data }) => {
        Array.isArray(data) ? setTickets(data) : setTickets([]);
      })
      .catch((error) => {
        console.log("thisiserror");
        console.log(error);
      });
  }, [query]);

  const formSubmit = (event) => {
    event.preventDefault();
    if (!selection) {
      setQuery({});
      return;
    }
    setQuery({ [selection]: userInput });
  };

  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <Grid.Column
        style={{ minHeight: "90vh", width: "100%", position: "relative" }}
      >
        <Segment
          placeholder
          textAlign="center"
          style={{
            height: "100%",
            maxWidth: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <SideBar>
            <TicketQueryForm
              current={selection}
              setSelection={setSelection}
              setUserInput={setUserInput}
              formSubmit={formSubmit}
            />
            {tickets.length === 0 ? (
              <h1>No Tickets Found</h1>
            ) : (
              <Segment basic>
                {tickets.map((ticket) => (
                  <TicketSummary key={ticket._id} {...ticket} />
                ))}
              </Segment>
            )}
          </SideBar>
        </Segment>
      </Grid.Column>
      {/* <Container className="ticketquery" as={Segment}>
        <SideBar>
          <TicketQueryForm
            current={selection}
            setSelection={setSelection}
            setUserInput={setUserInput}
            formSubmit={formSubmit}
          />
          {tickets.length === 0 ? (
            <h1>No Tickets Found</h1>
          ) : (
            <Segment basic>
              {tickets.map((ticket) => (
                <TicketSummary key={ticket._id} {...ticket} />
              ))}
            </Segment>
          )}
        </SideBar>
      </Container> */}
    </>
  );
}

export default TicketQuery;
