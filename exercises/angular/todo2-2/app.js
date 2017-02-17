var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "httpService", "$http", function ($scope, httpService, $http) {

    $scope.todos = [];

    $scope.addTodo = function (todo) {
        httpService.addTodo(todo).then(function (response) {
            $scope.todos.push(response.data);
            //                console.log(response.data);
            $scope.todo.title = "";
            $scope.todo.description = "";
            $scope.todo.imgUrl = "";

        });
    };


    $scope.delete = function (myTodo, index) {
        httpService.delete(myTodo).then(function (response) {
            console.log(response.data);
            $scope.todos.splice(index, 1);

        });
    };

    $scope.update = function (todoObj, index) {
        httpService.update(todoObj)
            .then(function (response){
            console.log(todoObj.completed);
        })
    }


    httpService.getFromServer().then(function (response) {
        $scope.todos = response.data;
        //                console.log($scope.todos);
    })


}]);