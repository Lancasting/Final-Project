const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateObj = {
  type: Date,
  default: Date.now(),
};

const CycleSchema = new Schema({
  updatedDate: dateObj,
  name: {
    type: String,
  },
  tickets: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

const Cycle = mongoose.model("Cycle", CycleSchema);
module.exports = Cycle;
