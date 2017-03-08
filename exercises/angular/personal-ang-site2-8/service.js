angular.module("MyApp")

.service("starWarsService", ["$http", function ($http) {
    var self = this;
    this.films = [];
    this.people = [];

    this.getFilms = function () {
        return $http.get("http://swapi.co/api/films")
            .then(function (response) {
            console.log(response.data);
                self.films = response.data.results
            })
    }


    this.getEpisodeCharacters = function (film) {
        var people = [];
        for (var i = 0; i < film.characters.length; i++) {
            $http.get(film.characters[i]).then(function (response) {
                people.push(response.data.name);
            });
        }
        console.log(people);
        return people;
    }

    this.characters = function () {
        return $http.get("http://swapi.co/api/people/")
            .then(function (response) {
                self.people = response.data.results;
            })
            //            .then(function (response) {
            //                return $http.get("http://swapi.co/api/people/?page=2").then(function (response) {
            //                    self.otherPerson = response.data.results;
            //                })
            //            })

    }


    //        this.world = function(item){
    //            var worlds = [];
    //             for (var i = 0; i < item.length; i++){
    //                 $http.get(item[i].homeworld).then(function(response){ 
    //                    this.newWorld = response.data;
    //                    console.log(newWorld);
    //                     worlds.push(newWorld);
    //                    return this.newWorld;
    //                     })
    //             }
    //             console.log(worlds);
    //            return worlds;
    //        }

    this.world = function (item) {
        return $http.get(item).then(function (response) {
//            console.log(response.data.name);
            return response.data;
        })
    }


}]);