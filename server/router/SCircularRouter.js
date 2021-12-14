const express = require("express");
const circularController = require("./../controller/SCircularController");
const circularRouter = express.Router();
// POST
// localhost:8000/v1/member

circularRouter.route("/circular").post(circularController.addCircular);
circularRouter.route("/circular/:id").get(circularController.getCircular);

// Admin
circularRouter.route("/adminCircular").get(circularController.getAllCircular);
circularRouter
  .route("/adminCircular/:id")
  .delete(circularController.deleteCircular)
  .patch(circularController.updateCircular);

module.exports = circularRouter;
