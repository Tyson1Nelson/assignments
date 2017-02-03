var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "$http", function ($scope, $http) {

var image = {image:""}

    $scope.addTodo = function () {
        $http.post("http://api.vschool.io/tysonnelson/todo", $scope.todo)
            .then(function (response) {
            $scope.getInfo.push(response.data);
                console.log(response.data);
                $scope.todo.title = "";
                $scope.todo.description = "";
                $scope.todo.imgUrl = "";
                
            });
    };

    $scope.delete = function (myTodo, index) {
        $http.delete("http://api.vschool.io/tysonnelson/todo/" + myTodo._id)
            .then(function (response) {
                console.log(response.data);
            $scope.getInfo.splice(index, 1);
//                $http.get("http://api.vschool.io/tysonnelson/todo")
//                    .then(function (response) {
//                        $scope.getInfo = response.data;
//                        console.log($scope.getInfo);
//                    })
            });
    };
    

   
        $http.get("http://api.vschool.io/tysonnelson/todo")
            .then(function (response) {
                $scope.getInfo = response.data;
                console.log($scope.getInfo);
            })
    
}]);