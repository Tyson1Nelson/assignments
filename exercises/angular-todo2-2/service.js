angular.module("MyApp")

.service("httpService", ["$http", function ($http) {
    
    this.addTodo = function (todo) {       
        return $http.post("http://api.vschool.io/tysonnelson/todo", todo)
            console.log(response);
    }
    
    this.delete = function (myTodo) {
        return $http.delete("http://api.vschool.io/tysonnelson/todo/" + myTodo._id)
    }
    
    
    this.getFromServer = function () {
       return $http.get("http://api.vschool.io/tysonnelson/todo")
    }
}]);