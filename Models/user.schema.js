const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
  },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
