const _Guard = require("../model/Guard");

// get All memebers
exports.getGuard = async function (req, res) {
  try {
    var guard = await _Guard.find();

    res.status(201).json({
      status: "success",

      data: {
        guard: guard,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: "Data fail to add in the Database........",
    });
  }
};
