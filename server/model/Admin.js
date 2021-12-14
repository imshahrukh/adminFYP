const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  adminId: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Admin", Admin);
