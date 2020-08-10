const { Ticket } = require("../models");

module.exports = {
  getAll(req, res) {
    Ticket.find({})
      .then((documents) => {
        res.json(documents);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};
