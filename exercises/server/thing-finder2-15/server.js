var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fruits = require("./route/fruitRoute")

app.use(bodyParser.json());
app.use("/fruit", fruits);




app.listen(8000, function () {
    console.log("app is listening on port 8000")
});