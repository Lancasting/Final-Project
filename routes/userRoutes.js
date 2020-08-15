const router = require("express").Router();
const passport = require("passport");
const userController = require("../controllers/userController");

router.post("/user/login", passport.authenticate("local"), (req, res) => {
  if (req.user) {
    res.json(req.user);
  }
});

router.get("/signout", (req, res) => {
  req.logout();
  res.json(req.user);
});

router.route("/users/search").get(userController.find);

router.route("/user/signup").post(userController.create);

module.exports = router;
