angular.module("MyApp")

.controller("HomeController", ["$scope", "$http", "starWarsService", function ($scope, $http, starWarsService) {
    $scope.showLuke = false;
    $scope.showC3 = false;
    $scope.showR2 = false;

    $scope.IndividualCharacters = function () {
        starWarsService.characters().then(function () {
            $scope.people = starWarsService.people;
            console.log($scope.people);
        }).then(function (response) {
            starWarsService.world($scope.people[0].homeworld, $scope.people[0].species).then(function (response) {
                $scope.lukeHome = response.name;
                $scope.lukeSpecies = starWarsService.species;                
            })
            starWarsService.world($scope.people[1].homeworld, $scope.people[1].species).then(function (response) {
                $scope.c3poHome = response.name;
                $scope.c3poHome = response.name;
            })
            starWarsService.world($scope.people[2].homeworld, $scope.people[2].species).then(function (response) {
                $scope.r2d2Home = response.name;
            })
            starWarsService.world($scope.people[3].homeworld, $scope.people[3].species).then(function (response) {
                $scope.darthHome = response.name;
            })
            starWarsService.world($scope.people[4].homeworld, $scope.people[4].species).then(function (response) {
                $scope.leiaHome = response.name;
            })
            starWarsService.world($scope.people[5].homeworld, $scope.people[5].species).then(function (response) {
                $scope.owenHome = response.name;
            })
            starWarsService.world($scope.people[6].homeworld).then(function (response) {
                $scope.beruHome = response.name;
            })
            starWarsService.world($scope.people[7].homeworld, $scope.people[7].species).then(function (response) {
//                console.log(response);
                $scope.r5d4Home = response.name;

            })
            starWarsService.world($scope.people[8].homeworld).then(function (response) {
//                $scope.biggsHome = response.name;
            })
        })
    }

    $scope.IndividualCharacters();


            }])