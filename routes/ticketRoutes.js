const router = require("express").Router();
const ticketController = require("../controllers/ticketController.js");

router.route("/tickets/all").get(ticketController.getAll);
router.route("/tickets/:id").get(ticketController.getOne);

module.exports = router;
