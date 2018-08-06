const mongoose = require("mongoose");
const schemas = require("./schemas");

mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("database connected!");
});

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sourcerer",
  "Warlock",
  "Wizard"
];

const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-elf",
  "Half-orc",
  "Halfling",
  "Human",
  "Tiefling"
];

classes.forEach(function(name) {
  new schemas.Class({
    name: name
  }).save();
});

races.forEach(function(name) {
  new schemas.Race({
    name: name
  }).save();
});
