const _Violation = require("../model/Violation");

// Methods
// addLeaveApplication

exports.addViolation = async function (req, res) {
  try {
    console.log(req.body);
    const violation = await _Violation.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        violation: violation,
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
exports.getViolation = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    var regNo = query.RegNo;
    var date = query.Date;
    var type = query.Type;

    if (type === "all") {
      console.log(type);
      var violation = await _Violation.find().sort({ date: -1 });

      res.status(201).json({
        status: "success",

        data: {
          violation: violation,
        },
      });
    } else {
      var violation = await _Violation
        .find({
          $and: [{ RegNo: regNo }, { date: date }],
        })
        .sort({ date: -1 });

      res.status(201).json({
        status: "success",

        data: {
          violation: violation,
        },
      });
    }
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};


exports.getAllViolations = async function (req, res) {
  try {
    var violation = await _Violation
      .find()
      .populate("filedBy")
      .populate("studentId");
    res.status(201).json({
      status: "success",
      data: {
        violation: violation,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
