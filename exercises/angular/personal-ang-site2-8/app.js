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
}]);
