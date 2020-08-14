const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");
// const isAuthenticated = require("../config/middleware/isAuthenticated.js");

router.post("/user/login", passport.authenticate("local"), (req, res) => {
  if (req.user) {
    res.json(true);
  }
});

router.get("/signout", (req, res) => {
  req.logout();
  res.json(req.user);
});

router.route("/user/signup").post(userController.create);

module.exports = router;
