const { Ticket } = require("../models");

module.exports = {
  getAll(req, res) {
    console.log(req.body);
    Ticket.find(req.body)
      .populate("createdBy")
      .then((documents) => {
        res.json(documents);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  getOne(req, res) {
    Ticket.findOne({ _id: req.params.id })
      .populate("createdBy")
      .populate("assignees")
      .then((ticket) => {
        res.json(ticket);
      });
  },
};
