const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dateObj = {
    type: Date,
    default: Date.now()
};

const UserSchema = new Schema(
    {
        createdDate: dateObj,
        updatedDate: dateObj,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;