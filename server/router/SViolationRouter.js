const express = require("express");
const violationController = require("../controller/SViolationController");
const violationRouter = express.Router();
// POST
// localhost:8000/v1/member

violationRouter
  .route("/violation")
  .post(violationController.addViolation)
  .get(violationController.getViolation);

  violationRouter.route("/adminViolation").get(violationController.getAllViolations);

// POST
// localhost:8000/v1/member/12345

// complaintRouter.route("/teacher/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = violationRouter;
