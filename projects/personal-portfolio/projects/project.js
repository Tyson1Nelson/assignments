angular.module("MyApp")

.controller("ProjectsController", ["$scope", function ($scope) {
    $scope.projects = [
        {
            name: "Project 1",
            image: "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg",
            description: "First Project"
        }, {
            name: "Business Time",
            image: "http://i.dailymail.co.uk/i/pix/2016/09/13/14/384A98B300000578-0-image-a-63_1473774825844.jpg",
            description: "second Project"
        }, {
            name: "Project 3",
            image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVIgg8l9D_nIHDYGYMbTE1JOW8qmRMJWBgR9eBeOwcLw0vv1Nm",
            description: "third Project"
        }
    ];
}]);