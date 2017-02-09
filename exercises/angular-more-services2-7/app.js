angular.module("cartoonApp", [])

.controller("MainController", ["$scope", function ($scope) {
    $scope.name = "ty";
    $scope.imgInfo = [];
    
    $scope.addCartoon = function () {
        $scope.imgInfo.push($scope.img);
        console.log($scope.imgInfo)
    }
}])