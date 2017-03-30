angular.module("MyApp", ["ngRoute", 'ui.bootstrap'])

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
$('.navbar li').click(function(e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
//    e.preventDefault();
});