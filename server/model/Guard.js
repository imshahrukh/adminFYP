const mongoose = require("mongoose");

const Guard = new mongoose.Schema({
  // Pending,Paid

  guardId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  contact: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Guard", Guard);
