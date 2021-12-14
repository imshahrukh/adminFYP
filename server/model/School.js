const mongoose = require("mongoose");

const School = new mongoose.Schema({
  // Pending,Paid
  contact: [
    {
      type: String,
      required: true,
    },
  ],
  email: {
    type: String,
    required: true,
  },

  principal: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("School", School);
