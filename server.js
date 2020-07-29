//Dependencies
const express = require("express");
const compression = require("compression");//Performance
const mongoose = require("mongoose");//Database
require("dotenv").config()//.env use
const path = require("path");//Grab Paths
const PORT = process.env.PORT || 3001;//Port#
const app = express();//Server

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connect To Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ticketing_system", error =>{
  //Check if connection error
  if(error) return console.log("Connection Unsuccessful");
  //Log Successfull connection
  console.log("Connection Successful");
});

//user compression for performance
app.use(compression());

//Add future routes here
/**
 * app.use(Routes)
 */


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
