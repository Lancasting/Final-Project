const router = require("express").Router();

router.get("/login", ({ user }, res) => {
  if (user) {
    res.json(user);
    return;
  }
});

module.exports = router;
