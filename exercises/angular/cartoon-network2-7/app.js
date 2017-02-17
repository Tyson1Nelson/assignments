angular.module("cartoonApp", [])

.controller("MainController", ["$scope", "cartoonService", function ($scope, cartoonService) {
    $scope.name = "ty";
    
    $scope.addCartoon = function (newCartoon) {
        $scope.imgInfo = cartoonService.addCartoon(newCartoon)
        $scope.img = {};
    }
}])