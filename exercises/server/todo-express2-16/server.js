var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use("/todo", require("./routes/todoRoute"));




app.listen(port, function () {
    console.log("app is listening on port " + port);
});