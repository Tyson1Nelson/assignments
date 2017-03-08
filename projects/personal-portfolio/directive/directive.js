angular.module("MyApp")

.directive("projectInfo", [function () {
    return {
        templateUrl: "directive/profileInfo.html",
        scope: {
            project: "="
        },
        restrict: "E",
    }
}]);