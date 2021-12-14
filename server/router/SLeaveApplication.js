const express = require("express");
const applicationController = require("./../controller/SLeaveApplication");
const applicationRouter = express.Router();
// POST
// localhost:8000/v1/member

applicationRouter
  .route("/leaveapplication")
  .post(applicationController.addLeaveApplication)
  .get(applicationController.getAllLeaveApplication);

// POST
// localhost:8000/v1/member/12345

applicationRouter
  .route("/leaveapplication/:id")
  .get(applicationController.getLeaveApplication)
  .patch(applicationController.updateLeaveApplication)
  .delete(applicationController.deleteLeaveApplication);
module.exports = applicationRouter;
