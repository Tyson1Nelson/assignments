var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    
    $scope.picList = [];
    $scope.showInfo = function (imgInfo){
        console.log("imgInfo");
        $scope.pic = {
            title: imgInfo.title,
            imgUrl: imgInfo.img,
            description: imgInfo.description
            
        };
        $scope.picList.push($scope.pic);
        $scope.imgInfo = {};
    };
    $scope.delete = function(item, index){
        $scope.picList.splice(item, 1)
    }
    
    $scope.commentList = [];
    
    $scope.comment = function(input){
        
        $scope.commented = input;
//        console.log($scope.commented);
        $scope.commentList.push(input);
        
//        console.log($scope.commentList);
    }

}]);