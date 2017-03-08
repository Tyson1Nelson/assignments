angular.module("MyApp", [])

.controller("MainController", ["$scope", "$http", "BountyHunter", function ($scope, $http, BountyHunter) {

    $scope.bounties = [];
    $scope.editBounty = false;
    $scope.input = {
        type: "Sith"
    };
    

    $scope.addBounty = function (input) {
        BountyHunter.addBounty(input).then(function (response) {
            console.log(response.data);
            $scope.bounties.push(response.data);
            $scope.getInfo();
            $scope.input = {};
            $scope.input.type = "Sith";
            
        })
    }
    $scope.update = function (input, submitted, index){
        BountyHunter.editBounty(input).then(function(response) {
            $scope.getInfo();
            $scope.editBounty = false;
            
        })
    }
    
    $scope.deleteBounty = function (input, index){
        BountyHunter.deleteBounty(input).then(function(response){
            console.log(response);
            $scope.getInfo();
        })
    }
    
    $scope.getInfo = function(){
        BountyHunter.getInfo().then(function(response){
        $scope.hunted = response.data;
        })
    }
    $scope.getInfo();
}]);