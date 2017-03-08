angular.module("MyApp")

.service("PonyService", ["$http", function ($http) {

    this.ponyList = [];
    var self = this;

    this.addPony = function (ponyInfo) {
        return $http.post("http://api.vschool.io/tysonnelson/pony", ponyInfo).then(function (response) {
            self.ponyList.push(response.data);
            console.log(self.ponyList);
            return response.data
        })
    };
    this.ponyValidator = function (ponyInfo) {
        if (ponyInfo.name === undefined || ponyInfo.name.length < 3) {
            return bootbox.alert("YOU MUST HAVE 3 OR MORE CHARACTERS")
            console.log("less than 3");
        } else if (ponyInfo.imgUrl === undefined || ponyInfo.username === undefined) {
            return alert("Needs 'ALL' Info");
        } else if (ponyInfo.name.match(/([0-9])/g)) {
            alert("No numbers")
            return "hello";
            console.log(ponyInfo.name.match(/([0-9])\w+/g))
        } else {
            return this.addPony(ponyInfo);
        }
    }
    

    this.getPonies = function () {
        return $http.get("http://api.vschool.io/tysonnelson/pony");
    };

    this.update = function (pony) {
        return $http.put("http://api.vschool.io/tysonnelson/pony/" + pony._id, pony);
    };

    this.delete = function (pony) {
        return $http.delete("http://api.vschool.io/tysonnelson/pony/" + pony._id)
    }

}]);