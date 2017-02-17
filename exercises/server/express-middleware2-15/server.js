var express = require("express");  
var app = express();  
var bodyParser = require("body-parser");

app.use(bodyParser.json());

var fruit = [{
    type: "banana",
    price: 0.5
},{
    type: "apple",
    price: 0.75
}];

app.get("/fruit", function(req, res) {
   res.send(fruit); 
});

app.listen(8000, function() {
    console.log("-------- Server running on port 8000 --------");
});  