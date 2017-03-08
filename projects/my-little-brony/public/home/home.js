angular.module("MyApp")

.controller("HomeController", ["$scope", "PonyService", "$location", function ($scope, PonyService, $location) {
    
    $scope.addPony = function (pony) {
        PonyService.ponyValidator(pony).then(function(response){
             console.log(response);
            $location.path("/ponies");
           
        })
//            $scope.pony = {};
    };
//    $scope.name = PonyService.ponyList;
    
}])