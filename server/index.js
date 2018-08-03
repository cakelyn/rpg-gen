const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 1337);
const port = app.get("port");
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`listening on port ${port}`));
