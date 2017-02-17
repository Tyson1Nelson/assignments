var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 8000;
var addDino = require("./addDino")

app.use(bodyParser.json());
app.use(addDino);


app.get("/", function(req, res) {
    console.log(req.dinosaur);
    res.send(req.dinosaur);
});

app.post("/", function(req, res) {
    res.send({message: "you sent a POST to '/"});
});


app.listen(port, function() {
    console.log("app is running on port " + port);
});