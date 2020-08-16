const router = require("express").Router();
const ticketController = require("../controllers/ticketController.js");

router.route("/search").post(ticketController.getAll);
router.route("/tickets/:id").get(ticketController.getOne);
router.route("/tickets/update").put(ticketController.updateOne);
router.route("/tickets/delete").delete(ticketController.deleteOne);
router.route("/tickets/create").post(ticketController.create);

module.exports = router;
