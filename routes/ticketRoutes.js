const router = require("express").Router();
const ticketController = require("../controllers/ticketController.js");

router.route("/search").get(ticketController.getAll);
router.route("/tickets/:id").get(ticketController.getOne);

module.exports = router;
