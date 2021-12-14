const express = require("express");
const complaintController = require("../controller/SComplaintController");
const complaintRouter = express.Router();
// POST
// localhost:8000/v1/member

complaintRouter.route("/complaint").post(complaintController.addComplaint);
complaintRouter.route("/complaint/:id").get(complaintController.getComplaint);

// Admin
complaintRouter
  .route("/adminComplaint")
  .get(complaintController.getAllComplaint)
  .patch(complaintController.updateComplaint);

complaintRouter
  .route("/adminComplaint/:id")

module.exports = complaintRouter;
