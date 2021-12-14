const _Complaint = require("../model/Complaint");

// Methods
// addLeaveApplication

exports.addComplaint = async function (req, res) {
  console.log(req.body);
  try {
    const complaint = await _Complaint.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        complaint: complaint,
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
// exports.getAllLeaveApplication = async function (req, res) {
//   try {
//     var leaveApplication = await _LeaveApplication.find();

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

exports.getComplaint = async function (req, res) {
  try {
    var complaint = await _Complaint.find({
      RegNo: req.params.id,
    });
    res.status(201).json({
      status: "success",
      data: {
        complaint: complaint,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getAllComplaint = async function (req, res) {
  try {
    var complaint = await _Complaint
      .find()
      .populate("filedBy")
      .populate("studentId");
    res.status(201).json({
      status: "success",
      data: {
        complaint: complaint,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateComplaint = async function (req, res) {
  try {

    var query = require("url").parse(req.url, true).query;
    var id = query.id;

    var complaint = await _Complaint.findByIdAndUpdate(id , req.body , {new : true})
    
      res.status(200).json({
        status: "Success hehe",
        complaint: complaint,
      });

  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message : req.body
    });
  }
};
