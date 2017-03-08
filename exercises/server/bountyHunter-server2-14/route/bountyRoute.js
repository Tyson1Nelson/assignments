var express = require("express");
var bountyRoute = express.Router();
var Bounty = require("../model/bounties");

bountyRoute.route("/")
    .get(function (req, res) {
        Bounty.find(function (err, bounty) {
            if (err) return res.status(500).send(err);
            res.send(bounty);
        })
    })

    .post(function (req, res) {
        var bounty = new Bounty(req.body);
        bounty.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(bounty)
        });
    });

bountyRoute.route("/:id")
    .get(function (req, res) {
        Bounty.findById(req.params.id, function (err, bounty) {
            if (err) return res.status(500).send(err);
            res.status(201).send(bounty);
        });
    })
    .put(function (req, res) {
        Bounty.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, bounty) {
            if (err) return res.status(500).send(err);
            res.status(201).send(bounty)
        })
    })
    .delete(function (req, res) {
        Bounty.findByIdAndRemove(req.params.id, function (err, bounty) {
            if (err) return res.status(500).send(err);
            console.log("DELETED");
            res.send({
                message: "Successfully deleted Bounty",
                success: true
            });
        });
    });

module.exports = bountyRoute;