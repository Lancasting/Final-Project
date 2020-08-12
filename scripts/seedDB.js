const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGOURI || "mongodb://localhost/ticketing_system"
);

const ticketsSeed = [
  {
    subject: "Help Desk",
    createdBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    updatedBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    description: "Help! My Computer Is Broke!",
    type: "Computer",
    // assignees: ["ObjectId('5f333c5bcab34601840232fa')"],
  },
  {
    subject: "Network",
    createdBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    updatedBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    description: "Help! My Internet Is Broke!",
    type: "Network",
    // assignees: ["ObjectId('5f333c5bcab34601840232fa')"],
  },
  {
    subject: "Software",
    createdBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    updatedBy: mongoose.Types.ObjectId("5f334be61c0a73248435e514"),
    description: "Help! My Software Is Broke!",
    type: "Software",
    // assignees: ["ObjectId('5f333c5bcab34601840232fa')"],
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

// const userAccountSeed = [
//   {
//     username: "Ikemous",
//     email: "ikemous@ikemous.com",
//     password: "secret",
//     firstname: "ike",
//     lastname: "ikelast",
//   },
// ];

// const users = userAccountSeed.map((account) => {
//   const newAccount = new db.Accounts(account);
//   newAccount.beforeCreate();
//   return newAccount;
// });

// db.Accounts.deleteMany({})
//   .then(() => db.Accounts.insertMany(users))
//   .then((data) => {
//     console.log(" records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
