const mongoose = require("mongoose");

const Visit = new mongoose.Schema({
  // Pending,Paid

  visitorName: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },

  timeIn: {
    type: String,
    required: true,
  },

  timeOut: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  registeredBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Guard",
  },
});
module.exports = mongoose.model("Visit", Visit);
