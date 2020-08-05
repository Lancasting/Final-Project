const { User } = require("../models");

module.exports = {
  create({ body }, res) {
    const newAccount = new User(body);
    newAccount.hashPassword();
    User.create(newAccount)
      .then((result) => {
        res.json(result);
        res.redirect("/login");
      })
      .catch((error) => {
        res.json(error);
      });
  },
};
