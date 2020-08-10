const router = require("express").Router();
const ticketController = require("../controllers/ticketController.js");

router.route("/tickets/all").get(ticketController.getAll);

module.exports = router;
