const Greet = require("../models/Greet");

const getGreeting = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  const message = `Hello, ${name}!`;

  // Store in DB
  const greetEntry = new Greet({ name, message });
  await greetEntry.save();

  res.json({ message });
};

module.exports = { getGreeting };
