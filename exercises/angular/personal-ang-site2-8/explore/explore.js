angular.module("MyApp")

.controller("ExploreController", ["$scope", "$http", "starWarsService", function ($scope, $http, starWarsService) {

    $scope.showCharacters = false;
    $scope.showEpisodeInfo = false;

    $scope.showInfo = function () {
        starWarsService.getFilms().then(function (response) {
            $scope.films = starWarsService.films;
            console.log($scope.films);
        });
    }
    $scope.showInfo();


    $scope.people = function (film, index) {
        film.people = starWarsService.getEpisodeCharacters(film);
        console.log(index);
        $scope.playSound();
    };

    $scope.characters = function () {
        starWarsService.characters().then(function (response) {
            $scope.characters = starWarsService.people;
        })
    };
    $scope.characters();



    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $scope.playSound = function () {
        var solo = new Audio('audio/FUZZBALL.WAV');
        var chewy = new Audio('audio/wookie.wav');
        var luke = new Audio('audio/Whatjunk.wav');
        var yoda = new Audio('audio/yoda-help_you_i_can.mp3');
        var otherYoda = new Audio('audio/do_or_do_not.wav');
        var darth = new Audio('audio/i am your father.mp3');
        var r2 = new Audio('audio/r2-d2.wav');
        var randomNum = getRandomInt(1, 7);
        if (randomNum === 1) {
            solo.play();
        } else if (randomNum === 2) {
            chewy.play();
        } else if (randomNum === 3) {
            luke.play();
        } else if (randomNum === 4) {
            yoda.play();
        } else if (randomNum === 5) {
            otherYoda.play();
        } else if (randomNum === 6) {
            darth.play();
        } else {
            r2.play();
        }
    };
}])