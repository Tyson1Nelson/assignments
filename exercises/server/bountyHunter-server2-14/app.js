var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var uuid = require("uuid");
var path = require("path");

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,"public")));


var bounties = [{
    firstName: "jabba",
    lastName: "hutt",
    living: false,
    bountyAmount: 1000,
    type: "sith",
    id: uuid.v4()
}];


app.get("/bounty", function (req, res) {
    res.send(bounties);
});

app.get("/bounty/:bountyId", function (req, res) {
    console.log(req.params);
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {

            return res.send(bounties[i]);
        }
    }
    res.status(404).send({
        message: "not found"
    });
});

app.post("/bounty", function (req, res) {
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty);

    console.log(newBounty);
});

app.put("/bounty/:bountyId", function (req, res) {
    var updateBounty = req.body;
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            for (var key in updateBounty) {
                if (updateBounty[key] !== bounties[i][key]) {
                    bounties[i][key] = updateBounty[key];
                }
                console.log(key);
            }
            return res.send(bounties[i]);
        }
    }
});


app.delete("/bounty/:bountyId", function (req, res) {
    var deleteBounty = req.body;
    //    console.log(deleteBounty);
    for (var i = 0; i < bounties.length; i++) {
        if (bounties[i].id === req.params.bountyId) {
            bounties.splice(i, 1);
            return res.send(bounties);
        }        
    }
    return res.status(404).send({
        message: "not found"
    });

});


app.listen(8000, function () {
    console.log("app is listening on port 8000")
});


/////////////////////////////////////////////

//ANGULAR JS PAGE

//angular.module("myApp", [])

//.service("bountyService", ["$http", function ($http){
//this.getBounties = function(){
//    return $http.get("/bounty")
//}
//}])