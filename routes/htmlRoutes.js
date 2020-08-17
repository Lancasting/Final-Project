const router = require("express").Router();

router.get("/user/verify", ({ user }, res) => {
  console.log(user);
  if (user) {
    return res.json({ email: user[0].email, _id: user[0]._id });
  }
  res.json();
});

module.exports = router;
