const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cycleSchema = require("./cycle");
const userSchema = require("./user");
const dateObj = {
  type: Date,
  default: Date.now(),
};

const ProjectSchema = new Schema({
  updatedDate: dateObj,
  cycles: {
    type: String,
  },
  children: [cycleSchema, userSchema],
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
