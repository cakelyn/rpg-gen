const mongoose = require("mongoose");
const charClass = require("./workers/charClass");
const charRace = require("./workers/charRace");

mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("database connected!");
});

charClass.populate();
charRace.populate();

module.exports.character = require("./workers/character");
module.exports.class = charClass;
module.exports.race = charRace;
