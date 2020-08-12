import React, { useState, useEffect } from "react";
import API from "../utils/API.js";
import SideBar from "../components/SideBar.js";
import TicketQueryForm from "../components/TicketQueryForm.js";
import TicketSummary from "../components/TicketSummary.js";
import { Helmet } from "react-helmet";
import { List } from "semantic-ui-react";

function TicketQuery() {
  // state of query\
  const [tickets, setTickets] = useState([]);
  const [query, setQuery] = useState("all");

  useEffect(() => {
    API.getAllTickets()
      .then(({ data }) => {
        console.log(data);
        setTickets(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);
  useEffect(() => console.log(tickets), [tickets]);

  return (
    <>
      <Helmet>
        <title>HALP - Ticket Page</title>
        <meta name="description" content="Ticket Page Of The HALP Website" />
      </Helmet>
      <SideBar>
        <TicketQueryForm />
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
