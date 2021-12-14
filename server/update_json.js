const fs = require("fs");
fs.readFile(
  "./Dummy_Data/HomeWork_Data.js",
  "utf8",
  function readFileCallback(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      // fs.writeFile("./data", JSON.stringify(result), "utf8", (err) => {
      //   if (err) throw err;
      //   console.log("File has been saved!");
      // });
    }
  }
);
