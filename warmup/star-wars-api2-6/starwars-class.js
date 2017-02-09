var app = angular.module("MyApp", []);

app.controller("MainController",["$scope", "$http", function($scope, $http){
   $scope.name= "billy";
    $http.get("http://swapi.co/api/films/1")
    .then(function(resonse){
        $scope.starWars = resonse.data;
        console.log($scope.starWars[1]);
    })
}]);