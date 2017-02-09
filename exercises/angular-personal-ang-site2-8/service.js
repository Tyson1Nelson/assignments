angular.module("MyApp")

.service("starWarsService", ["$http", function ($http) {

    this.getFilms = function () {
        return $http.get("http://swapi.co/api/films");
    }

//    this.episodeCharacters = function (film, i) {
//        
//        return $http.get(film.characters[i])
//
//    }
    
    this.getEpisodeCharacters = function(film) {
        var people = [];
        for (var i = 0; i < film.characters.length; i++) {
            $http.get(film.characters[i]).then(function(response) {
                people.push(response.data.name);
            });
        }
        return people;
    }
    
    this.characters = function() {
        return $http.get("http://swapi.co/api/people/")
//        .then(function() {
//        $http.get("http://swapi.co/api/people/?page=2")   
//        })
       
    }
    

}]);