angular.module("MyApp", ["ngRoute"])

.config(["$routeProvider", function($routeProvider) {
    
    $routeProvider
        .when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        })
        .when("/tech", {
            templateUrl: "components/tech/tech.html",
            controller: "TechController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);
