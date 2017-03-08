var express = require("express");
//var politics = require("./politicsInfo");
var Politics = require("./politicsDb")
var politicRoute = express.Router();


politicRoute.route("/")
    .get(function (req, res) {
    
        var query = {};
        if (req.query.title) query.title = req.query.title;
        if (req.query.description) query.description = req.query.description;
        Politics.find(query, function (err, politics) {
            if (err) return res.status(500).send(err);
            res.send(politics);
        });
    })
    .post(function (req, res) {
        var addPolitic = new Politics(req.body);
        addPolitic.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(addPolitic);
        });
    });

politicRoute.route("/:id")
    .get(function (req, res) {
        Politics.findById(req.params.id, function (err, politic) {
            if (err) return res.status(500).send(err);
            res.send(politic);
        });
    })
    .put(function (req, res) {
            Politics.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            }, function (err, updatedPolitic) {
                if (err) return res.status(500).send(err);
                res.send(updatedPolitic);
            });
           
    })
.delete(function (req, res) {
    Politics.findByIdAndRemove(req.params.id, function (err, politic) {
        if (err) return res.status(500).send(err);
        res.send({message: "Successfully deleted politic", success: true});
    });
});

module.exports = politicRoute;