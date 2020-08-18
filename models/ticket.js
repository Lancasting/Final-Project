const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dateObj = {
  type: Date,
  default: Date.now(),
};

const TicketSchema = new Schema({
  updatedDate: dateObj,
  createdDate: dateObj,
  subject: {
    type: String,
    trim: true,
    validate: [({ length }) => length >= 1, "Please enter a subject"],
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  updatedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    trim: true,
    default: "Need Assistance With My Issue, Please Check Subject Line",
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
    default: "Hardware",
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;
