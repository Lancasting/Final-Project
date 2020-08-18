const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGOURI || "mongodb://localhost/ticketing_system"
);

const ticketsSeed = [
  {
    subject: "Help Desk",
    createdBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    updatedBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    description: "Help! My Computer Is Broke!",
    type: "Computer",
    // assignees: ["ObjectId('5f3a2b6f2644183e8c13011d')"],
  },
  {
    subject: "Network",
    createdBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    updatedBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    description: "Help! My Internet Is Broke!",
    type: "Network",
    // assignees: ["ObjectId('5f3a2b6f2644183e8c13011d')"],
  },
  {
    subject: "Software",
    createdBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    updatedBy: mongoose.Types.ObjectId("5f3a2b6f2644183e8c13011d"),
    description: "Help! My Software Is Broke!",
    type: "Software",
    // assignees: ["ObjectId('5f3a2b6f2644183e8c13011d')"],
  },
];

db.Ticket.deleteMany({})
  .then(() => db.Ticket.insertMany(ticketsSeed))
  .then(() => {
    console.log(" records inserted!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
