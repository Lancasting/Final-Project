const { User } = require("../models");

module.exports = {
  create({ body }, res) {
    const newAccount = new User(body);
    newAccount.hashPassword();
    User.create(newAccount)
      .then(({ data }) => {
        res.json({email: data.email, _id: data._id});
      })
      .catch((error) => {
        res.json(error);
      });
  },
  find({ body }, res) {
    const query = body[0];
    const where = body[1];
    User.find({ [query]: { $regex: where } })
      .then((collections) => {
        res.json(collections);
      })
      .catch((error) => {
        res.json(error);
      });
  },
};
