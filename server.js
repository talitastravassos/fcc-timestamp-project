const express = require("express");
const app = express();
const routes = require("./routes");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

app.use("/api", routes);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
