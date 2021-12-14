const express = require("express");
const visitController = require("../controller/SVisitor");
const visitRouter = express.Router();
// POST
// localhost:8000/v1/member

visitRouter.route("/visit").get(visitController.getVisitor);

module.exports = visitRouter;
