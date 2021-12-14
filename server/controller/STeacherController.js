const _Teacher = require("../model/Teacher");

// Methods
// addLeaveApplication

exports.addTeacher = async function (req, res) {
  try {
    console.log(req.body);
    const teacher = await _Teacher.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        teacher: teacher,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

// get All memebers
exports.getTeacher = async function (req, res) {
  try {
    var teacher = await _Teacher.find();

    res.status(201).json({
      status: "success",

      data: {
        teacher: teacher,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
