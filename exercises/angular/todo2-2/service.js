angular.module("MyApp")

.service("httpService", ["$http", function ($http) {
    
    this.addTodo = function (todo) {       
        return $http.post("http://api.vschool.io/tysonnelson/todo", todo)
            console.log(response);
    }
    
    this.delete = function (todo) {
        return $http.delete("http://api.vschool.io/tysonnelson/todo/" + todo._id)
    }
    
    this.update = function (obj, index) {
       return $http.put("http://api.vschool.io/tysonnelson/todo/" + obj._id, obj)
    }
    
    this.getFromServer = function () {
       return $http.get("http://api.vschool.io/tysonnelson/todo")
    }
}]);