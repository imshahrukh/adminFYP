const _MEMBER = require("../model/Admin");

exports.findMemeber = async function (req, res) {
  try {

    var members = await _MEMBER.find({adminId : req.body.id , password : req.body.password});

    if (members.length > 0)
    {
      res.status(201).json({
        status: "login success",
        data: {
          admin: members[0],
        },
      });
    }
    else
    {
      res.status(201).json({
        message: "login failed",
        data: {
          admin: members,
        },
      });
    }
    
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
