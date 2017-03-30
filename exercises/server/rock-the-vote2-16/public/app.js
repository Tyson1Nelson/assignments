angular.module("MyApp", [])

.controller("MainController", ["$scope", "PoliticService", function ($scope, PoliticService) {
    $scope.politicList = [];
    console.log($scope.commentBox);

    $scope.inputComment = false;
    
    $scope.addPolitics = function (input) {
        input.votes = 1 - 1;
        PoliticService.addPolitics(input).then(function (response) {
            $scope.politicList.push(response.data);
            $scope.input = {};
        });
    };

    $scope.getComments = function (input, index) {
        console.log(input.comments.length);
        console.log(input);
        $scope.modal = input;
        $scope.modalComments = input.comments;
    };
    $scope.addComment = function (input, index) {
        input.comments.push(input.newComment);
        delete input.newComment;
        PoliticService.editPolitic(input);
    };

    $scope.increment = function (input, index) {
        var count = input.votes++;
        PoliticService.editPolitic(input, index)
    };
    $scope.decrement = function (input, index) {
        if (input.votes > 0) {
            var count = input.votes--;
            PoliticService.editPolitic(input, index)
        };
    };

    $scope.deletePolitic = function (input, index) {
        PoliticService.deletePolitic(input).then(function (response) {
            console.log(response);
            $scope.getInfo();
        });
    };

    $scope.getInfo = function () {
        PoliticService.getInfo().then(function (response) {
            $scope.politicList = response.data;
        });
    };
    $scope.getInfo();

}]);