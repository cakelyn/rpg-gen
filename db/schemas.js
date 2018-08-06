const mongoose = require("mongoose");

const classes = mongoose.Schema({
  name: String
});

const races = mongoose.Schema({
  name: String
});

const characters = mongoose.Schema({
  name: String,
  race: { type: mongoose.Schema.Types.ObjectId, ref: "Race" },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number
});

module.exports.Class = mongoose.model("Class", classes);
module.exports.Race = mongoose.model("Race", races);
module.exports.Character = mongoose.model("Character", characters);
