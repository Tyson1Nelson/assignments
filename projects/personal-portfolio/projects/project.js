angular.module("MyApp")

.controller("ProjectsController", ["$scope", function ($scope) {
    $scope.projects = [
        {
            name: "Mario Pest Control",
            rating: 2,
            images: ["projects/images/mario/top.png", "projects/images/mario/middle.png", "projects/images/mario/bottom.png"],
            description: "One page mario website that keeps track of how much money Mario makes when he takes care of certain pests, each pest is worth a certain amount. (Pages: html, js, css)"
        }, {
            name: "Business Time",
            rating: 1,
            images: ["/projects/images/bussiness-time/Screen%20Shot%202017-03-10%20at%2010.08.46%20AM.png"],
            description: "Simple websit for a possibly desired 'bussiness' for a woodworking company. Its a very basic website that has 3 html and css pages."
        }, {
            name: "Colossal Adventure",
            rating: 0,
            images: ["projects/images/colossal-adv/top.png", "/projects/images/colossal-adv/middle.png", "/projects/images/colossal-adv/bottom.png"],
            description: "Console based RPG game, that askes the user to interact with it until the player dies. operated by readline-sync"
        },{
            name: "Panguins VS Communists",
            rating: 0,
//            images: [""],
            description: "A terminal/console based game that runs through a series of functions to randomly determine which party (panguin or communist) will survive. The object was to have one party nuke the other and the winner was based on the population of the enemy"
        },{
            name: "Mom's Shopping List",
            rating: 2,
            images: ["projects/images/grocery-list/grocery-list.png"],
            description: "A website used for adding items to a list, and having the ability to remove individual items from that list"
        },{
            name: "My Little Brony",
            rating: 4,
            images: ["projects/images/my-little-brony/home-pg.png", "projects/images/my-little-brony/view.png", "projects/images/my-little-brony/edit.png"],
            description: "This website is a user friendly way for people to add their favorite 'My Little Pony' characters. My goal for this website was to add a pony's info on the home page, and when submited, the user would be taken to the list of ponies page."
        },{
            name: "Starry Wars",
            rating: 4,
            images: ["projects/images/personal-site/home.png", "projects/images/personal-site/about.png", "projects/images/personal-site/explore.png"],
            description: "One in a few of my favorite projects. I built a Star Wars website using a Star Wars API for information. I tried to make it fun, creative, knowledgable, and interactive as much as possible."
        },{
            name: "Rock The Vote",
            rating: 3,
            images: ["projects/images/rock-vote/main.png", "projects/images/rock-vote/comments.png", "projects/images/rock-vote/add-comment.png"],
            description: "Designed to list political issues and keep track of votes. Also able to comment on each specific issues if desired"
        },{
            name: "Bounty Hunter",
            rating: 3,
            images: ["projects/images/bounty/home.png"],
            description: "This is a Star Wars based website, designed for the use of Boba Fett (bounty hunter). Its designed to keep track of his bounties, previous, present and future."
        },{
            name: "Homework Tracker",
            rating: 5,
            images: ["projects/images/group-project/home.png", "projects/images/group-project/students.png", "projects/images/group-project/assignments.png"],
            description: "This was probably my favorite and most challenging. I was in a team of 3 people (myself included). We built an app for parents to track their childrens homework.",
            github: "https://github.com/V-School-SLC-January/The-Mamas-The-Papa"
        },{
            name: "",
            rating: 0,
            images: [],
            description: ""
        },{
            name: "",
            rating: 0,
            images: [],
            description: ""
        }
    ];
    $scope.viewImg = function(img, index){
        $("#myModal").modal();
        $scope.image = img;
    }
    $scope.check = function(info){
        console.log(info.images.length);
    }
    
}]);