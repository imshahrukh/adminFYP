const _Circular = require("../model/Circular");

// Methods

exports.addCircular = async function (req, res) {
  try {
    const circular = await _Circular.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        circular: circular,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};


exports.getCircular = async function (req, res) {
  try {
    var circular = await _Circular.find();

    const classCircular = circular.filter((e) =>
      e.classes.includes(req.params.id)
    );
    res.status(201).json({
      status: "success",
      data: {
        circular: classCircular,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
exports.getAllCircular = async function (req, res) {
  try {
    var circular = await _Circular.find().sort({ date: -1 });

    res
      .status(201)
      .json({
        status: "success",
        data: {
          circular: circular,
        },
      });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.deleteCircular = async function (req, res) {
  try {
    var circular = await _Circular.findByIdAndRemove(req.params.id);

    res.status(201).json({
      status: "success",
      data: {
        circular: circular,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateCircular = async function (req, res) {
  try {
    var circular = await _Circular.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        circular: circular,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
// exports.updateLeaveApplication = async function (req, res) {
//   try {
//     var leaveApplication = await _LeaveApplication.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//       }
//     );

//     res.status(201).json({
//       status: "success",
//       data: {
//         leave: leaveApplication,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data fail to add in the Database........",
//     });
//   }
// };
// exports.deleteLeaveApplication = async function (req, res) {
//   try {
//     var leaveApplication = await _LeaveApplication.findByIdAndRemove(
//       req.params.id
//     );

//     res.status(201).json({
//       status: "success",
//       data: {
//         leave: leaveApplication,
//       },
//     });
//   } catch (e) {
//     res.status(400).json({
//       status: "fail",
//       message: "Data fail to add in the Database........",
//     });
//   }
// };
