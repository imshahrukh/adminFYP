const _Parent = require("../model/Parent");

// get All memebers
exports.getParent = async function (req, res) {
  try {
    var parent = await _Parent.find();

    res.status(201).json({
      status: "success",

      data: {
        parent: parent,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
