var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "httpService", function($scope, httpService) {
    
    httpService.getHitList().then(function (response) {
        $scope.hitList = response.data;
         console.log($scope.hitList);
    })
}]);