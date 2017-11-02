const express = require("express");
const router = express.Router();

router.post("/", function (req, res) {
  const io = req.app.get("io");

  io.emit("/curl", req.body);
  res.sendStatus(200);
});

router.post("/:lgo", function (req, res) {
  const io = req.app.get("io");

  io.emit("/curl/" + req.params.lgo, req.body);
  res.sendStatus(200);
});

router.post("/:lgo/:pharma", function (req, res) {
  const io = req.app.get("io");

  io.emit("/curl/" + req.params.lgo + "/" + req.params.pharma, req.body);
  res.sendStatus(200);
});

module.exports = router;
