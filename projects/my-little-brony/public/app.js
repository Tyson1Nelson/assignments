angular.module("MyApp", ["ngRoute"])

.config(["$routeProvider", function($routProvider) {
    $routProvider
    .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController",
        })
        .when("/ponies", {
            templateUrl: "ponies/ponies.html",
            controller: "PoniesController",
        })
        .otherwise({
            redirectTo: "/home"
        });
}])