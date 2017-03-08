var express = require("express");
var carRoutes = express.Router();
var Car = require("../model/cars");

carRoutes.route("/")
    .get(function (req, res) {
        Car.find(function (err, cars) {
            if (err) return res.status(500).send(err);
            res.send(cars);
        })
    })
    .post(function (req, res) {
        var car = new Car(req.body);
        car.save(function (err) {
            if (err) return res.status(500).send(err);
            res.status(201).send(car);
        })
    })

carRoutes.route("/:id")
    .get(function (req, res) {
        Car.findById(req.params.id, function (err, car) {
            if (err) return res.status(500).send(err);
            res.send(car);
        })
    })
    .put(function (req, res) {
        Car.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }, function (err, car) {
            if (err) return res.status(500).send(err);
            res.send(car);
        })
    })
    .delete(function (req, res) {
        Car.findByIdAndRemove(req.params.id, function (err, car) {
            if (err) return res.status(500).send(err);
            res.send({
                message: "Successfully deleted Car",
                success: true,
            });
        });
    })

module.exports = carRoutes;