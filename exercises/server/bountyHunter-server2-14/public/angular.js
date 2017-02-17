angular.module("MyApp", [])

.controller("MainController", ["$scope", "$http", "BountyHunter", function($scope, $http, BountyHunter) {
    
    $scope.name = "bobo";
    
    $http.get("/bounty").then(function(response){
        
        $scope.hunter = response.data[0];
        console.log($scope.hunter.firstName);
    })
    
    $http.post("/bounty").then(function(response){
        
        
        
    })
    
}]);

