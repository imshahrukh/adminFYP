const mongoose = require("mongoose");

const Violation = new mongoose.Schema({
  violations: [
    {
      type: String,
    },
  ],
  // Verify,Not-Verifyed
  status: {
    type: String,
    required: true,
  },

  RegNo: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  timeDetected: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Violation", Violation);
