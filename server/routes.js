const router = require("express").Router();
const db = require("../db/index");
const generateStats = require("./statGenerator");

router.post("/api/characters", (req, res) => {
  let cl, r;

  const attr = generateStats(req.body.class);

  db.class
    .find(req.body.class)
    .then(classId => {
      cl = classId._id;
      return db.race.find(req.body.race);
    })
    .then(raceId => {
      r = raceId._id;
      return db.character.store(req.body.name, r, cl, attr);
    })
    .then(newChar => {
      console.log(req.body.name, "saved to database");
      res.send(newChar);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get("/api/characters", (req, res) => {
  // get most recent 20 characters from database
});

module.exports = router;
