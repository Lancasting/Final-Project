const router = require("express").Router();

router.get("/user/verify", ({ user }, res) => {
  if (user) {
    res.json(user);
    return;
  }
});

module.exports = router;
