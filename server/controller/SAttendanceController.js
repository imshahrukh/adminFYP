const _Attendance = require("../model/Attendance");

// Methods
// addAttendance

// to Seach attendance (date,reg)
exports.addAttendance = async function (req, res) {
  try {
    console.log(req.body);

    const addAttendance = await _Attendance.create(req.body);
    console.log(req.body);

    res.status(201).json({
      status: "success",
      data: {
        attendance: addAttendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getStudnetAttendance = async function (req, res) {
  try {
    // status= "all","monthly","day",

    // ----------------- Read the Parameters -----------------------------

    var query = require("url").parse(req.url, true).query;
    var regNo = query.RegNo;
    var date = query.Date;
    var status = query.Type;

    // ----------------- Read Attendance -----------------------------

    let attendance = "";
    if (status === "all") {
      attendance = await _Attendance.find({ RegNo: regNo }).sort({ date: -1 });
    }
    if (status === "monthly") {
      attendance = await _Attendance
        .find({
          $and: [{ RegNo: regNo }, { date: { $gte: date } }],
        })
        .sort({ date: -1 });
    }
    if (status === "day") {
      attendance = await _Attendance.find({
        $and: [{ RegNo: regNo }, { date: date }],
      });
    }
    // ----------------- Responce -----------------------------

    const all_attendance = Object.keys(attendance).length;
    res.status(201).json({
      status: "success",
      total: all_attendance,
      data: {
        attendance: attendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};


// get All attendance
exports.getAllAttendance = async function (req, res) {
  try {
    var attendance = await _Attendance.find();

    res.status(201).json({
      status: "success",

      data: {
        attendance: attendance,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};