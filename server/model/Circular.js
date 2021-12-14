const mongoose = require("mongoose");

const Circular = new mongoose.Schema({
  // Pending,Paid
  classes: [
    {
      type: String,
      required: true,
    },
  ],
  subject: {
    type: String,
    required: true,
  },
  // issuedBy: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "Admin",
  // },

  date: {
    type: String,
    required: true,
  },

  body: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Circular", Circular);
