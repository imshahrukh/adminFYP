const _HomeWork = require("../model/HomeWork");

// Methods
// addAttendance

// to Seach attendance (date,reg)
exports.addHomeWork = async function (req, res) {
  try {
    const addHomework = await _HomeWork.create(req.body);
    console.log(req.body);

    res.status(201).json({
      status: "success",
      data: {
        homework: addHomework,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};

exports.getHomeWork = async function (req, res) {
  try {
    // status= "all","monthly","day",
    //   date and class

    // ----------------- Read the Parameters -----------------------------

    var query = require("url").parse(req.url, true).query;
    var stdClass = query.class;
    var date = query.date;

    // ----------------- Read Attendance -----------------------------

    let homeWork = await _HomeWork.find({
      $and: [{ class: stdClass }, { date: date }],
    });

    // ----------------- Responce -----------------------------

    res.status(201).json({
      status: "success",
      data: {
        homework: homeWork,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
