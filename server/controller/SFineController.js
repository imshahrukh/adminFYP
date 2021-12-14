const _Fine = require("../model/Fine");

// Methods
// addLeaveApplication

exports.addFine = async function (req, res) {
  try {
    console.log(req.body);
    const fine = await _Fine.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        fine: fine,
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
exports.getFine = async function (req, res) {
  try {
    var query = require("url").parse(req.url, true).query;
    var regNo = query.RegNo;

    var fine = await _Fine.find({ RegNo: regNo }).populate("violations");

    res.status(201).json({
      status: "success",

      data: {
        fine: fine,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getAllFine = async function (req, res) {
  try {
    var fine = await _Fine
      .find()
      .sort({ date: -1 })
      .populate("violations")
      .populate("studentId");

    res.status(201).json({
      status: "success",

      data: {
        fine: fine,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateFine = async function (req, res) {
  try {
    var fine = await _Fine.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        fine: fine,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
