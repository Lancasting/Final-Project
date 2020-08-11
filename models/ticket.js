const mongoose = require("mongoose");
const userSchema = require("./user");
const Schema = mongoose.Schema;

const dateObj = {
  type: Date,
  default: Date.now(),
};

const TicketSchema = new Schema({
  updatedDate: dateObj,
  subject: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 1, "Please enter a subject"],
  },
  createBy: {
    type: String,
    trim: true,
  },
  updatedBy: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    validate: [
      ({ length }) => length >= 5,
      "Please enter a description of your issue",
    ],
  },
  priorityLevel: {
    type: Number,
    default: 4,
  },
  status: {
    type: String,
    default: "New",
  },
  type: {
    type: String,
  },
  assignee: {
    type: String,
  },
  children: [userSchema],
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
