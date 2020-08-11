const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ticketSchema = require("./ticket");
const dateObj = {
  type: Date,
  default: Date.now(),
};

const CycleSchema = new Schema({
  updatedDate: dateObj,
  cycles: {
    type: String,
  },
  children: [ticketSchema],
});

const Cycle = mongoose.model("Project", CycleSchema);
module.exports = Cycle;
