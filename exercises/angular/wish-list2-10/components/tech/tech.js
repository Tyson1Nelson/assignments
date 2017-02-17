angular.module("MyApp")

.controller("TechController", ["$scope", function($scope) {
    
    $scope.name = "tech page";
    $scope.things = [{
        image: "http://knowledge.sonicelectronix.com/wp-content/uploads/2011/05/Flat-Screen-TV.jpg",
        name: "Flat Screen Tv",
        price: "$438.78"
    },{
        image: "https://images-na.ssl-images-amazon.com/images/I/71pqjnfzgkL._SL1500_.jpg",
        name: "Mac Laptop",
        price: "$900.00"
    },{
        image: "http://cdn1.knowyourmobile.com/sites/knowyourmobilecom/files/Samsung-Galaxy-S5-White.png",
        name: "Cell Phone",
        price: "$175.89"
    },{
        image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ8jIzonoj3SXUtEqrplLH9k6Ur99Tk8BWMBLujRD0QIaJ3Peo4MA",
        name: "Stereo",
        price: "$239.89"
    }];
}]);