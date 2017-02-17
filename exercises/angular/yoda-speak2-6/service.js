angular.module("MyApp")

.service("httpService", ["$http", function ($http) {
    
    this.yodaSpeaks = function (textInput, config) {
        console.log("hello")
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + textInput, config);
        
    }
}]);