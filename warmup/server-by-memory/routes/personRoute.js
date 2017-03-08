var express = require("express");
var personRoutes = express.Router();
var Person = require("../model/person");

personRoutes.route("/")
    .get(function (req, res) {
        Person.find(function (err, person) {
            if (err) res.status(500).send(err);
            res.send(person);
        });
    })
    .post(function (req, res) {
        var person = new Person(req.body);
    person.save(function(err) {
        if (err) return res.status(500).send(err);
        res.status(201).send(person);
    })
    });

personRoutes.route("/:id")
    .get(function (req, res) {
        Person.findById(req.params.id)
            .populate("carsOwned")
            .exec(function (err, person) {
            if (err) return res.status(500).send(err);
            res.send(person);
        })
    })

    .put(function (req, res) {
        Person.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, person) {
            if (err) return res.status(500).send(err);
            res.send(person);
        })
    })
    .delete(function (req, res) {
        Person.findByIdAndRemove(req.params.id, function (err, person) {
            if (err) return res.status(500).send(err);
            res.send({
                message: "Successfully deleted " + person.name,
                success: true,
            });
        });
    })


module.exports = personRoutes;