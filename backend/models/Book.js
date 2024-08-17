const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
    default: "",
  },
  type: { type: [String], default: [] },
});

module.exports = mongoose.model("Book", bookSchema);
