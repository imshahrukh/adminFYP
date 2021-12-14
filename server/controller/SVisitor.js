const _Visitor = require("../model/Visit");

// get All memebers
exports.getVisitor = async function (req, res) {
  try {
    var visit = await _Visitor.find();

    res.status(201).json({
      status: "success",

      data: {
        visit: visit,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
