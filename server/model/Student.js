const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  RegNo: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  parentId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Parent",
  },

  photo: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Student", Student);
