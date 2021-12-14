const express = require("express");
const homeWorkController = require("./../controller/SHomeWorkController");
const homeWorkRouter = express.Router();
// POST
// localhost:8000/v1/member

homeWorkRouter
  .route("/homework")
  .post(homeWorkController.addHomeWork)
  .get(homeWorkController.getHomeWork);

module.exports = homeWorkRouter;
