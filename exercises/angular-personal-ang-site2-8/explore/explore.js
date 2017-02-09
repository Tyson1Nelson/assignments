angular.module("MyApp")

.controller("ExploreController", ["$scope", "$http", "starWarsService", function ($scope, $http, starWarsService) {
    $scope.name = "explore"
    
    //    starWarsService.getService().then(function(response) {
    //        $scope.films =response.data.results;
    ////        console.log($scope.films);
    //    })

    $scope.showFilms = false;
    $scope.showCharacters = false;
    
    $scope.showInfo = function () {
        starWarsService.getFilms().then(function (response) {
            $scope.films = response.data.results;
        });
    }
    $scope.showInfo();

    
    $scope.people = function (film) {
        film.people = starWarsService.getEpisodeCharacters(film);   
    }

    $scope.characters = function () {
        
        starWarsService.characters().then(function (response) {
            $scope.character = response.data.results;
//            console.log($scope.character);
        })
        
        $http.get("http://swapi.co/api/people/?page=2").then(function (response) {
            $scope.characterPg2 = response.data.results;

        })
    }
    $scope.characters();
    
    $scope.playAudio = function() {
        var audio = new Audio('audio/Whatjunk.wav');
        audio.play();
    };
}])