const express = require("express");
const studentController = require("./../controller/SStduentController");
const studentRouter = express.Router();
// POST
// localhost:8000/v1/member

studentRouter.route("/student").post(studentController.addStudent).get(studentController.getAllStudents);
//   .get(memberController.getAllMembers);

// POST
// localhost:8000/v1/member/12345

// studentRouter
//   .route("/member/:id")
//   .get(memberController.getMemeberByID)
//   .patch(memberController.updateMemberByID);
module.exports = studentRouter;
