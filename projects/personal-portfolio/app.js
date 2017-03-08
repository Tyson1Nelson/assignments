angular.module("MyApp", ["ngRoute"])

.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/projects", {
            templateUrl: "projects/project.html",
            controller: "ProjectsController"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);