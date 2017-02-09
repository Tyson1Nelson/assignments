angular.module("routingApp", ["ngRoute"])

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
        .when("/why", {
            templateUrl: "why/why.html",
            controller: "WhyController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);