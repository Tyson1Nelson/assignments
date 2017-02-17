angular.module("MyApp")

.controller("ExploreController", ["$scope", "$http", "starWarsService", function ($scope, $http, starWarsService) {
    $scope.name = "explore"

    //    starWarsService.getService().then(function(response) {
    //        $scope.films = response.data.results;
    ////        console.log($scope.films);
    //    })

    $scope.showFilms = false;
    $scope.showCharacters = false;

    $scope.showInfo = function () {
        starWarsService.getFilms().then(function (response) {
            $scope.films = starWarsService.films;
        });
    }
    $scope.showInfo();


    $scope.people = function (film) {
        film.people = starWarsService.getEpisodeCharacters(film);
    }

    $scope.characters = function () {
        starWarsService.characters().then(function (response) {
            $scope.characters = starWarsService.people;
//            $scope.pg2Characters = otherPerson;
            //            console.log(otherPerson)
            //            console.log($scope.character);
        })
    };
    $scope.characters();



    $scope.playuke = function () {
        var audio = new Audio('audio/Whatjunk.wav');
        audio.play();
    };
    $scope.playoda = function () {
        var audio = new Audio('audio/yoda-help_you_i_can.mp3');
        audio.play();
    };
}])