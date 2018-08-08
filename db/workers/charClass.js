const { Class } = require("../schemas");

module.exports.populate = () => {
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

  classes.forEach(function(name) {
    new Class({
      name: name
    }).save();
  });
};

module.exports.getAll = cb =>
  Class.find({})
    .sort({ _id: -1 })
    .limit(10)
    .exec(cb);

module.exports.find = cl => Class.findOne({ name: cl }).exec();
