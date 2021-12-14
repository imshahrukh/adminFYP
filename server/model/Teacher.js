const mongoose = require("mongoose");

const Teacher = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
  },
  assignedClass: {
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
  classes: [
    {
      type: String,
      required: true,
    },
  ],
  subjects: [
    {
      type: String,
      required: true,
    },
  ],
  photo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Teacher", Teacher);
