const random = require("lodash/random");
const faker = require("faker");
function getMessages(req, res) {
  const priority = random(1, 3);
  const typeErrorMessage = random(1, 17);
  const message = faker.lorem.sentence();
  switch (typeErrorMessage) {
    case 1:
      return res.status(404).json({ error: "404" });
    case 2:
      return res.status(500).json({ error: "500" });
    case 3:
      return res.status(503).json({ error: "503" });
    default:
      return res.json({ message, priority });
  }
}
module.exports = { getMessages };
