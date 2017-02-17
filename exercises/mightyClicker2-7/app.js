angular.module("MyApp", [])

.controller("MainController", ["$scope", "BlueService", "RedService", function ($scope, BlueService, RedService) {
    
    $scope.blueCounter = 100;
    $scope.redCounter = 100;
    
    $scope.addBlue = function (blueCounter, redCounter) {
        $scope.blueCounter = BlueService.incrament();
        $scope.redCounter = RedService.decrament();
    }
    
    $scope.addRed = function (blueCounter, redCounter) {
        $scope.redCounter = RedService.incrament();
        $scope.blueCounter = BlueService.decrament();
    }
    
}])