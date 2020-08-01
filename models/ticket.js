const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateObj = {
  type: Date,
  default: Date.now(),
};

const TicketSchema = new Schema({
  createdDate: dateObj,
  updatedDate: dateObj,
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
