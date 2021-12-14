const _Parent = require("../model/HomeWork");
const _HomeWork = require("../model/Fine");

// Methods
// addStudent

exports.addParent = async function (object) {
  try {
    const parent = await _HomeWork.create(object);
    console.log(parent);
    console.log("+++++++++++++++++++++++++++++++++++++");

    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     parent: parent,
    //   },
    // });
  } catch (e) {
    // res.status(400).json({
    //   status: "fail",
    //   message: e,
    // });
  }
};
exports.findTeacher = async function (req, res) {
  try {
    const parent = await _HomeWork.find();
    console.log(parent);
    console.log("+++++++++++++++++test++++++++++++++++++++");
    // res.status(201).json({
    //   status: "success",
    // });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
