const mongoose = require("mongoose");

const ServiceProvider = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  user_type: {
    type: String,
    required: true,
  },
  dbo: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
  eduction: [
    {
      institution: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      start_date: {
        type: String,
        required: true,
      },
      end_date: {
        type: String,
        required: true,
      },
    },
  ],
  skill: [String],
  rating: {
    type: Number,
  },
});
module.exports = mongoose.model("ServiceProvider", ServiceProvider);
