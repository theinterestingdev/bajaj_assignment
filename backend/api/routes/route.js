const express = require("express");
const { handleBfhl } = require("../controllers/bfhlController");

const router = express.Router();

router.post("/bfhl", handleBfhl);

router.get("/", (req, res) => {
  res.status(200).json({ message: "API root working!" });
});

module.exports = router;