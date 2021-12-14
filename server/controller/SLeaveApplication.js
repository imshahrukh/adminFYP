const _LeaveApplication = require("../model/LeaveApplication");

// Methods
// addLeaveApplication

exports.addLeaveApplication = async function (req, res) {
  try {
    console.log(req.body);
    const addLeaveApplication = await _LeaveApplication.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        leaveApplication: addLeaveApplication,
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
exports.getAllLeaveApplication = async function (req, res) {
  try {
    var leaveApplication = await _LeaveApplication.find();

    res.status(201).json({
      status: "success",

      data: {
        leave: leaveApplication,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.getLeaveApplication = async function (req, res) {
  try {
    console.log(req.params.id);
    var leaveApplication = await _LeaveApplication
      .find({
        RegNo: req.params.id,
      })
      .sort({ date: -1 });

    //
    res.status(201).json({
      status: "success",
      data: {
        leave: leaveApplication,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateLeaveApplication = async function (req, res) {
  try {
    var leaveApplication = await _LeaveApplication.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(201).json({
      status: "success",
      data: {
        leave: leaveApplication,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.deleteLeaveApplication = async function (req, res) {
  try {
    var leaveApplication = await _LeaveApplication.findByIdAndRemove(
      req.params.id
    );

    res.status(201).json({
      status: "success",
      data: {
        leave: leaveApplication,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
