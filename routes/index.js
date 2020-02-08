const express = require("express");
const router = express.Router();
// const morgan = require("morgan");

router.use(express.json());
// router.use(morgan("tiny"));

router.get("/timestamp/:date_string?", (req, res) => {
  console.log(req.params.date_string)
});

module.exports = router;
