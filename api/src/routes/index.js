const { Router } = require("express");
const random = require("lodash/random");
const faker = require("faker");
const router = Router();

router.get("/message", (req, res) => {
  const priority = random(1, 3);
  const typeErrorMessage = random(1, 12);
  const message = faker.lorem.sentence();
  switch (typeErrorMessage) {
    case 1:
      return res.status(404).send("mariano");
    case 2:
      return res.status(500).send("nelson");
    case 3:
      return res.status(503).send("villafuerte");
    default:
      return res.json({ message, priority });
  }
});

module.exports = router;
