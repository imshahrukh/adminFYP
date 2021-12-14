// import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const Member = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Member", Member);
