var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", "httpService", function ($scope, httpService) {

    $scope.getInfo = [];
    
    $scope.addTodo = function (todo) {
        httpService.addTodo(todo).then(function (response) {
            $scope.getInfo.push(response.data);
//                console.log(response.data);
                $scope.todo.title = "";
                $scope.todo.description = "";
                $scope.todo.imgUrl = "";
                
            });
    };
   
    
    $scope.delete = function (myTodo, index) {
        httpService.delete(myTodo).then(function (response) {
                console.log(response.data);
            $scope.getInfo.splice(index, 1);
                
            });
    };
    
    // update isnt working
//    $scope.update = function(todoObj){
//        $http.put("http://api.vschool.io/tysonnelson/todo/" + todoObj._id, todoObj.completed).then(function(response){
//            todoObj.completed = true;
//        })
//    }
        
   
        httpService.getFromServer().then(function (response) {
                $scope.getInfo = response.data;
//                console.log($scope.getInfo);
            })
        
    
}]);