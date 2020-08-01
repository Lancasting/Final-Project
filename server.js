//Dependencies
const express = require("express");
const session = require("express-session");
const compression = require("compression"); //Performance
const mongoose = require("mongoose"); //Database
const passport = require("./config/passport.js");
require("dotenv").config(); //.env use
const path = require("path"); //Grab Paths
const PORT = process.env.PORT || 3001; //Port#
const server = express(); //Server

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

//Connect To Database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/ticketing_system",
  (error) => {
    //Check if connection error
    if (error) {
      return console.log("Connection Unsuccessful");
    }
    //Log Successfull connection
    console.log("Connection Successful");
  }
);

//user compression for performance
server.use(compression());

// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// We need to use sessions to keep track of our user's login status
server.use(
  session({
    secret: process.env.SECRET || "secret",
    resave: true,
    saveUninitialized: true,
  })
);
server.use(passport.initialize());
server.use(passport.session());

//Add future routes here
server.use(require("./routes/userRoutes"));

// Send every request to the React app
// Define any API routes before this runs
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
