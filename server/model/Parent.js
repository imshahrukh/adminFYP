const mongoose = require("mongoose");

const Parent = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  RegNo: [
    {
      type: String,
      required: true,
    },
  ],
  visitingPin: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Parent", Parent);
