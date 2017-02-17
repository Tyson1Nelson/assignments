var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var port = process.env.PORT || 8000;
var politics = require("./politics");

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send(politics);
})

app.get("/:politicsId", function (req, res) {
    for (var i = 0; i < politics.length; i++) {
        if (politics[i].id === req.params.politicsId) {
            res.send(politics[i]);
        }
    }
    res.status(404).send({
        message: "Not Found"
    });
});

app.post("/", function (req, res) {
    var addPolitic = req.body;
    addPolitic.id = uuid.v4();
    politics.push(addPolitic);
    res.send(addPolitic);
});

app.put("/:politicsId", function (req, res) {
    var updatePolitics = req.body;
    for (var i = 0; i < politics.length; i++) {
        if (politics[i].id === req.params.politicsId) {
            for(var key in updatePolitics){
                if(updatePolitics[key] !== politics[i][key]){
                    politics[i][key] = updatePolitics[key];
                }
            }
            return res.send(politics[i]);
        }
    }
    res.status(404).send({
        message: "Not Found"
    });
});
app.delete("/:politicsId", function (req, res) {
    var deletePolitics = req.body;
    for (var i = 0; i < politics.length)
});

app.listen(port, function () {
    console.log("-------- APP IS LISTENING ON PORT " + port + " --------");
});