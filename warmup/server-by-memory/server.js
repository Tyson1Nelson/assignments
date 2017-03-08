var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var mongoose = require("mongoose");
var morgan = require("morgan");

app.use(bodyParser.json());
app.use("/car", require("./routes/carRoutes"))
app.use("/person", require("./routes/personRoute"));
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/cars", function (err){
    if (err) throw err;
    console.log("------------   Connected to Database   -------------")
});

app.listen(port, function (){
    console.log("\n************ Server Listening on Port " + port + " ************");
});
