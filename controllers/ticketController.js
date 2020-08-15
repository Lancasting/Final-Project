const { Ticket } = require("../models");

module.exports = {
  getAll({ body }, res) {
    Ticket.find(body)
      .populate({ path: "createdBy", select: ["email", "_id"] })
      .then((documents) => {
        res.json(documents);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  getOne(req, res) {
    Ticket.findOne({ _id: req.params.id })
      .populate({ path: "createdBy", select: ["email", "_id"] })
      .populate({ path: "assignees", select: ["email", "_id"] })
      .populate({ path: "updatedBy", select: ["email", "_id"] })
      .then((ticket) => {
        res.json(ticket);
      });
  },
  updateOne(req, res) {
    console.log(req.body);
    Ticket.findByIdAndUpdate(req.body._id, req.body).then((ticket) => {
      res.json(ticket);
    });
  },
};
