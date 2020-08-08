const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateObj = {
  type: Date,
  default: Date.now(),
};

const ProjectSchema = new Schema({
  updatedDate: dateObj,
  cycles: {
    type: String,
  },
  tickets: {
    type: String,
  },
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
