const express = require("express");
var router = express.Router;

router.get("/", (req, res) => {
  response.send("Private api for data");
});

module.exports = router;
