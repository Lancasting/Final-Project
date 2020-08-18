const { User } = require("../models");

module.exports = {
  create({ body }, res) {
    const newAccount = new User(body);
    newAccount.hashPassword();
    User.create(newAccount)
      .then(() => {
        res.redirect(307, "/user/login")
      })
      .catch((error) => {
        res.status(401).json(error);
      });
  },
  find({ body }, res) {
    User.find({ [body[0]]: { $regex: body[1] } })
      .then((collections) => {
        res.json(collections.map(user => ({ email: user.email, _id: user._id})));
      })
      .catch((error) => {
        res.json(error);
      });
  },
};
