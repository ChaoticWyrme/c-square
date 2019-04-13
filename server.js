// backend
const express = require("express");
const app = express();
const port = 3000;

const dataRouter = require("./routes");

app.use(express.static("build"));

app.use("/data", dataRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
