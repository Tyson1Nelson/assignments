var app = angular.module("MyApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    
    $scope.picList = [];
    $scope.showInfo = function (imgInfo){
        console.log("imgInfo");
        $scope.pic = {
            title: imgInfo.title,
            imgUrl: imgInfo.img,
            description: imgInfo.description,
            comments:[]
        };
        $scope.picList.push($scope.pic);
//        $scope.imgInfo = {};
    };
    $scope.delete = function(pic, index){
        $scope.picList.splice(index, 1)
    }
    $scope.deleteComment = function (pic, index) {
        pic.comments.splice(index, 1);
    }
    
    
    $scope.comment = function(uglyThing){
        uglyThing.comments.push(uglyThing.newComment);
        delete uglyThing.newComment;
    
    }

}]);