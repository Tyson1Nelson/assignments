angular.module("MyApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/explore", {
            templateUrl: "explore/explore.html",
            controller: "ExploreController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}])
.controller("MainController", ["$scope", function($scope){
    $scope.lightSaber = function () {
        var audio = new Audio('audio/light_saber.wav');
        audio.play();
    };
    $scope.lightSaber2 = function () {
        var audio = new Audio('audio/lasrhit1.wav');
        audio.play();
    };
    $scope.lightSaber3 = function () {
        var audio = new Audio('audio/coolsaber.wav');
        audio.play();
    };
}]);