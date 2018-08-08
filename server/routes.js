const router = require("express").Router();
const db = require("../db/index");
const generateStats = require("./statGenerator");

router.post("/api/characters", (req, res) => {
  let cl;

  // generate character stats
  const attr = generateStats(req.body.class);

  // find class id
  db.class
    .find(req.body.class)
    .then(classId => {
      cl = classId._id;
      // find race id
      return db.race.find(req.body.race);
    })
    .then(raceId => {
      // store new character
      return db.character.store(req.body.name, raceId._id, cl, attr);
    })
    .then(newChar => {
      console.log(req.body.name, "saved to database");
      res.send(newChar);
    })
    .catch(err => res.send(err));
});

router.get("/api/characters", (req, res) => {
  db.character
    .get()
    .then(characters => res.send(characters))
    .catch(err => res.send(err));
});

module.exports = router;
