angular.module("MyApp")

.service("BountyHunter", ["$http", function ($http) {

    this.add = function () {       
        return $http.post("")
            console.log(response);
    }
    
}])