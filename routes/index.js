const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/timestamp/:date_string?", (req, res) => {
  const date = new Date(req.params.date_string);
  // console.log(req.params.date_string)
  const response = {
    unix: date.getTime(),
    utc: date
  };
  if (date === undefined) {
    res.send(new Date());
  } else {
    res.send(response);
  }
});

module.exports = router;
