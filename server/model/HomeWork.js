const mongoose = require("mongoose");

const HomeWork = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacherId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Teacher",
  },
  homeWorkDescription: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  dueDate: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("HomeWork", HomeWork);
