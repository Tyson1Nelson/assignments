var app = angular.module("MyApp", []);

app.controller("YodaController", ["$scope", "httpService", function ($scope, httpService) {

    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    
    $scope.submitInfo = function () {
        httpService.yodaSpeaks($scope.textInput, config).then(function (response) {
                console.log(response.data);
            $scope.yoda = response.data;
            });
    };
    
}]);