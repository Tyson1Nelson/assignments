var app = angular.module("MyApp", []);

app.controller("MainController",["$scope", "$http", function($scope, $http){
   $scope.name= "billy";
    $http.get("http://swapi.co/api/films")
    .then(function(resonse){
        $scope.starWars = resonse.data;
        $scope.films = $scope.starWars.results;
        console.log($scope.films);
    })
}]);