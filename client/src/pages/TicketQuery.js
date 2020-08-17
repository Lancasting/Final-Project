import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import SideBar from "../components/SideBar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { Container } from "semantic-ui-react";

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
  useEffect(() => console.log(tickets), [tickets]);

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
          <Container fluid>
            {tickets.map((ticket) => (
              <TicketSummary key={ticket._id} {...ticket} />
            ))}
          </Container>
        )}
      </SideBar>
    </>
  );
}

export default TicketQuery;
