var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var todos = require("./routes/todoRoute");

app.use(bodyParser.json());
app.use("/todo", todos);




app.listen(port, function () {
    console.log("app is listening on port " + port);
});