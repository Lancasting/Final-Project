const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateObj = {
  type: Date,
  default: Date.now(),
};

const ProjectSchema = new Schema({
  updatedDate: dateObj,
  name: {
    type: String,
    required: true,
  },
  private: {
    type: Boolean,
    default: false,
  },
  cycles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Cycle",
    },
  ],
});

const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
