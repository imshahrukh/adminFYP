const express = require("express");
const fineController = require("../controller/SFineController");
const fineRouter = express.Router();
// POST
// localhost:8000/v1/member

fineRouter
  .route("/fine")
  .post(fineController.addFine)
  .get(fineController.getFine);
// Admin
fineRouter.route("/adminFine").get(fineController.getAllFine);
fineRouter.route("/adminFine/:id").patch(fineController.updateFine);

module.exports = fineRouter;
