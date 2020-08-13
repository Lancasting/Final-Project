const { Ticket } = require("../models");

module.exports = {
  getAll({ body }, res) {
    Ticket.find(body)
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
