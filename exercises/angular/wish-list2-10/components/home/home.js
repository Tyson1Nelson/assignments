angular.module("MyApp")

.controller("HomeController", ["$scope", function ($scope) {
    
    $scope.items = [{
        image: "http://moto-dir.info/wp-content/uploads/2016/11/beats-headphones_updated-overview-clear-cut-systems-best-wireless-earbuds-music_1480410571.jpg",
        name: "Head Phones",
        price: "$89.00"
    }, {
        image: "http://www.the-home-cinema-guide.com/images/surround-sound-speakers.jpg",
        name: "Surround Sound",
        price: "$220.28"
                },{
                    image: "https://goenglish.tv/quiz-media/images/electronic_devices__1486__printer.jpg",
                    name: "Printet",
                    price: "$50.95"
                },{
                    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQUhMIAdjPakcYXBrD9bvLvJ-GWOwovoO8Aq7-OZ7Y3m8hT1p_MIA",
                    name: "Camera",
                    price: "$37.29"
                },{
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-FBMSIUJ_RGGDY-Zr5Dwd6V7xTMrsMlukU8sR4u_hzFVGsx-zQ",
                    name: "Alarm Clock",
                    price: "$20.99"
    }];
}]);