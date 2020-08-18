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
      .populate({ path: "assignedTo", select: ["email", "_id"] })
      .populate({ path: "updatedBy", select: ["email", "_id"] })
      .then((ticket) => {
        res.json(ticket);
      });
  },
  updateOne(req, res) {
    Ticket.findByIdAndUpdate(req.body._id, req.body).then((ticket) => {
      res.json(ticket);
    })
    .catch((error) => {
      res.json(error);
    });
  },
  deleteOne(req, res) {
    Ticket.findByIdAndDelete(req.body._id, req.body).then((ticket) => {
      res.json(ticket);
    });
  },
  create({ body }, res) {
    Ticket.create(body)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};
