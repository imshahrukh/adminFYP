const express = require("express");
const attendanceController = require("./../controller/SAttendanceController");
const attendanceRouter = express.Router();

// POST
// localhost:8000/v1/member

attendanceRouter
  .route("/attendance")
  .post(attendanceController.addAttendance)
  .get(attendanceController.getStudnetAttendance);

  attendanceRouter
  .route("/adminAttendance")
  .get(attendanceController.getAllAttendance);

// POST
// localhost:8000/v1/member/12345

// attendanceRouter
//   .route("/attendance/:RegNo")
//   .get(attendanceController.getAllAttendance);
//   .patch(memberController.updateMemberByID);

module.exports = attendanceRouter;
