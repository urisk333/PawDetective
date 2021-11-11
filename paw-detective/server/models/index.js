const mongoose = require("mongoose");
//----------------connect where?--------------------------------//
mongoose.connect("mongodb://localhost/db_paws", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", function () {
  console.error("connection error");
});
db.once("open", function () {
  console.log("we are connected to the database!");
});

module.exports = db;
