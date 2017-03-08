var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var path = require("path");
var bountyRoute = require("./route/bountyRoute")

app.use(bodyParser.json());
app.use("/bounty", bountyRoute);
app.use(express.static(path.join(__dirname,"public")));
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bounties", function (err) {
    if(err) throw err;
    console.log("--- Connected to mongoDB ---");
});


app.listen(port, function () {
    console.log("******** App is listening on port " + port + "********");
});


/////////////////////////////////////////////

//ANGULAR JS PAGE

//angular.module("myApp", [])

//.service("bountyService", ["$http", function ($http){
//this.getBounties = function(){
//    return $http.get("/bounty")
//}
//}])