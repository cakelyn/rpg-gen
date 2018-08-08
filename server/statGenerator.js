const rollDice = () => {
  const stats = [];
  let roll = [];

  // get 6 stats
  for (let i = 0; i < 6; i++) {
    // roll 4 random numbers
    for (let j = 0; j < 4; j++) {
      roll.push(Math.floor(Math.random() * 6 + 1));
    }
    // sort roll
    roll.sort((a, b) => {
      return b - a;
    });
    // keep the 3 largest numbers
    roll.pop();
    // add 3 largest numbers together
    stats.push(
      roll.reduce((acc, val) => {
        return acc + val;
      })
    );
    // reset roll
    roll = [];
  }

  return stats;
};

const getLargestStat = stats => {
  let dup = stats.slice();

  dup = dup.sort((a, b) => {
    return a - b;
  });

  return dup.pop();
};

const setLargestAttr = (attr, stat, cl) => {
  switch (cl) {
    case "Barbarian":
    case "Fighter":
    case "Paladin":
      attr.str = stat;
      break;
    case "Bard":
    case "Sorcerer":
    case "Warlock":
      attr.cha = stat;
      break;
    case "Cleric":
    case "Druid":
      attr.wis = stat;
      break;
    case "Monk":
    case "Ranger":
    case "Rogue":
      attr.dex = stat;
      break;
    case "Wizard":
      attr.int = stat;
      break;
  }
};

module.exports = cl => {
  const attr = {
    str: null,
    dex: null,
    con: null,
    int: null,
    wis: null,
    cha: null
  };
  const stats = rollDice();
  const largestStat = getLargestStat(stats);
  setLargestAttr(largestStat, attr, cl);

  stats.splice(stats.indexOf(largestStat), 1);

  // assign other attributes
  for (let key in attr) {
    if (attr[key] === null) {
      attr[key] = stats.pop();
    }
  }

  return attr;
};
