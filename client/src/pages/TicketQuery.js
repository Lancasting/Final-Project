import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import SideBar from "../components/SideBar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { List } from "semantic-ui-react";

function TicketQuery() {
  // state of query
  const [tickets, setTickets] = useState([]);
  const [selection, setSelection] = useState();
  const [userInput, setUserInput] = useState();
  const [query, setQuery] = useState({});

  useEffect(() => {
    API.getAllTickets(query)
      .then(({ data }) => {
        setTickets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  useEffect(() => console.log(tickets), [tickets]);

  const formSubmit = (event) => {
    event.preventDefault();
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
          selection={selection}
          setSelection={setSelection}
          setUserInput={setUserInput}
          formSubmit={formSubmit}
        />
        <List>
          {tickets.map((ticket) => (
            <TicketSummary key={ticket._id} {...ticket} />
          ))}
        </List>
      </SideBar>
    </>
  );
}

export default TicketQuery;
