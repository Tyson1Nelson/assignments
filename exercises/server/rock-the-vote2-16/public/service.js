angular.module("MyApp")

.service("PoliticService", ["$http", function ($http) {
    
    this.addPolitics = function (input) {       
        return $http.post("/politics", input)
            console.log(response);
    }
    
    this.editPolitic = function(input) {
        return $http.put("/politics/" + input._id, input);
    };
    this.deletePolitic = function(input){
        return $http.delete("/politics/" + input._id);
    }
    this.getInfo = function(){
        return $http.get("/politics");
    }
}])