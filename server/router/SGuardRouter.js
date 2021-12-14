const express = require("express");
const guardController = require("../controller/SGuardController");
const guardRouter = express.Router();
// POST
// localhost:8000/v1/member

guardRouter
  .route("/guard")
  .get(guardController.getGuard);

// POST
// localhost:8000/v1/member/12345

// complaintRouter.route("/guard/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = guardRouter;
