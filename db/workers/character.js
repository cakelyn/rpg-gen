const { Character } = require("../schemas");

module.exports.store = function(n, r, cl, attr) {
  new Character({
    name: n,
    race: r,
    class: cl,
    strength: attr.str,
    dexterity: attr.dex,
    constitution: attr.con,
    intelligence: attr.int,
    wisdom: attr.wis,
    charisma: attr.cha
  }).save();
};

module.exports.get = () =>
  Character.find({})
    .sort({ _id: -1 })
    .limit(10)
    .exec();
