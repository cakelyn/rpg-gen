const { Race } = require("../schemas");

module.exports.populate = () => {
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

  races.forEach(function(name) {
    new Race({
      name: name
    }).save();
  });
};

module.exports.find = r => Race.findOne({ name: r }).exec();
