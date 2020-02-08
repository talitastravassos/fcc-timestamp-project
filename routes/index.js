const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/timestamp/:date_string?", (req, res) => {
  const date_string = req.params.date_string;
  let date;

  if (!date_string) {
    date = new Date();
  } else if (!isNaN(date_string)) {
    date = new Date(parseInt(date_string));
  } else {
    date = new Date(date_string);
  }

  if (date.toString() === "Invalid Date") {
    res.send({ error: date.toString() });
  } else {
    res.send({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

module.exports = router;
