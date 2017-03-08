var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var mongoose = require("mongoose");
var path = require("path");
//var Politics = require("./routes/politicsDb");

app.use(bodyParser.json());

app.use("/politics", require("./routes/politicRoute"));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/politics", function (err){
    if(err) {throw err;}
    console.log("Connected to the database!");
});

app.use(express.static(path.join(__dirname,"public")));

app.listen(port, function () {
    console.log("-------- APP IS LISTENING ON PORT " + port + " --------");
});