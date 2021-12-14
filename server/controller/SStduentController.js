const _Student = require("../model/Student");

// Methods
// addStudent
exports.getAllStudents = async function (req, res) {
  try {
    var students = await _Student
      .find()
    res.status(201).json({
      status: "success",
      data: {
        students: students,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};



exports.addStudent = async function (req, res) {
  try {
    const addStudent = await _Student.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        attendance: addStudent,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
