const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/timestamp/:date_string?", (req, res) => {
  const date = new Date(req.params.date_string);
  // console.log(date)
  const response = {
    unix: date.getTime(),
    utc: date
  };

  if (req.params.date_string === undefined) {
    response.unix = new Date().getTime();
    response.utc = new Date();
    res.send(response);
  } else {
    res.send(response);
  }
});

module.exports = router;
