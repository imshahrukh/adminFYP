const express = require("express");
const teacherController = require("../controller/STeacherController");
const teacherRouter = express.Router();
// POST
// localhost:8000/v1/member

teacherRouter
  .route("/teacher")
  .post(teacherController.addTeacher)
  .get(teacherController.getTeacher);

// POST
// localhost:8000/v1/member/12345

// complaintRouter.route("/teacher/:id").get(complaintController.getComplaint);
//   .patch(applicationController.updateLeaveApplication)
//   .delete(applicationController.deleteLeaveApplication);
module.exports = teacherRouter;
