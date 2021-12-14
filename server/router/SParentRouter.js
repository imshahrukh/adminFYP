const express = require("express");
const parentController = require("../controller/SParent");
const parentRouter = express.Router();
// POST
// localhost:8000/v1/member

parentRouter
  .route("/parent")
  .get(parentController.getParent);

// POST
// localhost:8000/v1/member/12345

// complaintRouter.route("/parent/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = parentRouter;
