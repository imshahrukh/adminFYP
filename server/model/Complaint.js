const mongoose = require("mongoose");

const Complaint = new mongoose.Schema({
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
  //
  subject: {
    type: String,
    required: true,
  },
  filedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Teacher",
  },
  studentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Student",
  },
  description: {
    type: String,
    required: true,
  },
  respondent: {
    type: String,
    required: true,
  },
  remarks: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Complaint", Complaint);
