var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var fruit = [{
    type: "apple",
    brand: "gala",
    price: 0.5
}, {
    type: "banana",
    brand: "chiquita",
    price: 0.5
}, {
    type: "orange",
    brand: "naval",
    price: 0.75
}];


app.get("/fruit", function (req, res) {
    var filteredFruit = []
    console.log("hello there");
    console.log(Object.keys(req.query));
    if (Object.keys(req.query).length > 0) {
        console.log("in the first if statement");
        for (var i = 0; i < fruit.length; i++) {
            for (var key in req.query) {
                if (fruit[i][key] === req.query[key]) {
                    filteredFruit.push(fruit[i]);
                }
            }
        }
        return res.send(filteredFruit);
    } else {
        res.send(fruit);
    }

});




app.listen(8000, function () {
    console.log("app is listening on port 8000")
});