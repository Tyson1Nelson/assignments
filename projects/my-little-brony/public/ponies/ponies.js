angular.module("MyApp")

.controller("PoniesController", ["$scope", "PonyService", function ($scope, PonyService) {
    $scope.ponies = PonyService.ponyList;
    $scope.editPony = false;
    $scope.hideEdit = true;

    $scope.update = function (pony, index) {
    console.log(pony);
        $scope.hideEdit = true;
    PonyService.update(pony)
        .then(function (response) {
            console.log(pony);
        })
    PonyService.getPonies();
    };

    $scope.delete = function (pony, index) {
    PonyService.delete(pony).then(function (response) {
        $scope.ponies.splice(index, 1);

    });
    };

    PonyService.getPonies().then(function (response) {
    //        console.log(response);
    $scope.ponies = response.data;
});

}])