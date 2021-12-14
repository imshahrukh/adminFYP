const mongoose = require("mongoose");

const LeaveApplication = new mongoose.Schema({
  // Approved,Not-Approved
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
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  signedBy: {
    type: String,
    required: true,
  },

  leaveDays: [
    {
      type: String,
      required: true,
    },
  ],

  // Student Id to add
});
module.exports = mongoose.model("LeaveApplication", LeaveApplication);
