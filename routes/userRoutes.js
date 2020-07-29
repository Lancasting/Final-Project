const router = require("express").Router();
const passport = require("passport");
const isAuthenticated = require("../config/middleware/isAuthenticated.js");

const {User} = require("../models");

router.get("/user/login", passport.authenticate("local"), (req, res) =>{
    res.json(req.user);
});

router.post("/user/signup", ({body}, res) => {
    const newAccount = new User(body);
    newAccount.hashPassword();
    User.create(newAccount)
    .then(result => {
        res.json(result);
    })
    .catch(error => {
        res.json(error)
    });
});

module.exports = router;