angular.module("MyApp")

.directive("wishList", [function () {
    return {
        templateUrl: "directives/wishlist.html",
        scope: {
            tech: "="
        },
        restrict: "E",
    }
}]);