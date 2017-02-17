var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var addDinos = require(".middle");

//app.use(addDinos);

app.use("/", function(req, res, next){
    console.log("this happens no matter what, for any request");
    next();
});

app.use("/nope", function(req, res, next) {
    console.log("your in the /nope");
    next();
})

app.get("/blah", function (req, res, next){
    console.log(req);
    res.send("yay for dinosaurs");
    next()
});

app.listen(8000, function(){
    console.log("app is listening on port 8000");
});