var express = require("express");
var todoRoute = express.Router();
var uuid = require("uuid");
var todos = require("../addTodos");


todoRoute.route("/")
    .get(function (req, res) {
        res.send(todos);
    })
    .post(function (req, res) {
        var newTodos = req.body;
        newTodos._id = uuid.v4();
        todos.push(newTodos);
        res.send(newTodos);
    });
todoRoute.route("/:todoId")
    .get(function (req, res) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i]._id === req.params.todoId) {
                console.log("did a GET request to a specific id")
                return res.send(todos[i]);
            }
        }
        res.status(404).send({
            message: "Not Found"
        });
    })
    .put(function (req, res) {
        for (var i = 0; i < todos.length; i++) {
            var updateTodos = req.body;
            if (todos[i]._id === req.params.todoId) {
                console.log("it matches");
                for (var key in updateTodos) {
                    if (updateTodos[key] !== todos[i][key]) {
                        todos[i][key] = updateTodos[key];
                    }
                    console.log(key);
                }
                return res.send(todos[i]);
            }
        }
    })
    .delete(function (req, res) {
        for (var i = 0; i < todos.length; i++) {
            if (todos[i]._id === req.params.todoId) {
                todos.splice([i], 1);

                return res.send(todos);
            }
        }
        res.status(404).send({
            message: "not found"
        });
    });

module.exports = todoRoute;
