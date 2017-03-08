angular.module("MyApp")

.service("BountyHunter", ["$http", function ($http) {
    
    this.addBounty = function (input) {       
        return $http.post("/bounty", input)
            console.log(response);
    }
    
    this.editBounty = function(input) {
        return $http.put("/bounty/" + input._id, input)
    };
    this.deleteBounty = function(input){
        return $http.delete("/bounty/" + input._id)
    }
    this.getInfo = function(){
        return $http.get("/bounty")
    }
}])