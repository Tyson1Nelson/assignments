var app = angular.module("Badge", []);

app.controller("MainController", function ($scope) {

    $scope.onlyNumbers = /^\d+$/;
    $scope.addInfo = function (personInfo) {
        //       $scope.formInfo = {
        //           firstName: personInfo.firstName,
        //           lastName: personInfo.lastName
        //      }

            console.log(personInfo.firstName);
            $scope.formInfo = angular.copy(personInfo);
            $scope.personInfo = {};
            console.log($scope.formInfo);
        
    }
});