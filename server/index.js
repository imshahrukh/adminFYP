const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");
const { use } = require("./router/member_router");
const { Fine } = require("./Dummy_Data/Fine_Data");
const ParentController = require("./controller/SParentController");
const pdfTemplate = require("./document");
const pdf = require("html-pdf");
// Middlwares
const app = express();
app.use(express.json());

app.use(cors());
app.use(morgan("tiny"));

// .env
const port = process.env.PORT || 8000;
// console.log(process.env.LIVE_DB === "true");
// connection
mongoose
  .connect(process.env.DATABASE_CONNECTION_LIVE.toString(), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(console.log("test"))
  .catch((er) => console.log(er));

// call routers
// Smart School
app.use("/v1", require("./router/SAttendanceRouter"));
app.use("/v1", require("./router/SHomeworkRouter"));
app.use("/v1", require("./router/SLeaveApplication"));
app.use("/v1", require("./router/SStudentRouter"));
app.use("/v1", require("./router/SComplaintRouter"));
app.use("/v1", require("./router/STeacherRouter"));
app.use("/v1", require("./router/SCircularRouter"));
app.use("/v1", require("./router/SViolationRouter"));
app.use("/v1", require("./router/SFineRouter"));
app.use("/v1", require("./router/SVisitRouter"));
app.use("/v1", require("./router/SGuardRouter"));
app.use("/v1", require("./router/SParentRouter"));

app.post("/create-pdf", (req, res) => {
  console.log("game");
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
// localhost:3000/v1/member
app.use("/v1", require("./router/member_router"));
// localhost:3000/v1/login
app.use("/v1", require("./router/login_router"));
// information
app.get("/", (req, res) => {
  // res.json(Parent);
  // ParentController.findTeacher();
  // Fine.map((el) => ParentController.addParent(el));
  res.status(200).json({
    status: "fail",
    message: "Data fail to add in the Database........",
  });
  console.log("test");
});
app.listen(port, () => {
  console.log("API connected");
});
