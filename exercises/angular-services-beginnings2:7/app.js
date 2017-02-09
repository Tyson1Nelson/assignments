angular.module("MyPokeApp", [])

.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {

    $scope.pokemon = pokeService.arr;
    
    $scope.addPokemon = function (input) {
        pokeService.addPokemon(input);
        console.log(typeof $scope.nameInput);
        $scope.nameInput = "";
        
    }
    
    $scope.removePokemon = function (name) {
        pokeService.removePokemon(name);
    }
}]);