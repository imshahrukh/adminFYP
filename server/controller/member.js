const _MEMBER = require("../model/Member").default;

// Methods
// addMember
// getAllMembers
// getMemeberByID
// updateMemberByID
// addMember

exports.addMember = async function (req, res) {
  try {
    const addMember = await _MEMBER.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        member: addMember,
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
exports.getAllMembers = async function (req, res) {
  try {
    var members = await _MEMBER.find();

    const tot_mem = Object.keys(members).length;

    res.status(201).json({
      status: "success",
      total: tot_mem,
      data: {
        member: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.getMemeberByID = async function (req, res) {
  try {
    console.log(req.params);
    // var members = await _MEMBER.findById(req.params.id);

    // res.status(201).json({
    //   tatus: "success",
    //   data: {
    //     member: members,
    //   },
    // });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};

exports.updateMemberByID = async function (req, res) {
  try {
    var members = await _MEMBER.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(201).json({
      status: "success",
      data: {
        member: members,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
