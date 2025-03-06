const mongoose = require("mongoose");

const greetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Greet", greetSchema);
