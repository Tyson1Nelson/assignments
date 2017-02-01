/////////////////////MY ATTEMPT//////////////////////////

//var player = {
//    name: "bowser",
//    totalCoins: 10,
//    status: ["powered up", "big", "small", "dead"],
//    star: true
//}
//
//function setName(namePicked){
//    namePicked = generateRandomNumber(1, 2);
//    if(namePicked === 1){
//        return namePicked = "mario";
//    } else {
//        return namePicked = "luigi";
//    }
//}
//
//function gotHit(playerName){
//    if(playerName = "mario"){
//        for(var i = 0, i < player.status.length; i++)
//        console.log(player.status[i]);
//    }
//}
//gotHit();
//console.log(setName(player.name));
//
//function generateRandomNumber(min, max){
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//console.log(generateRandomNumber(1, 10));


//////////////////////////CLASS EXAMPLE//////////////////////////

var player = {
    name: "jimmy",
    totalCoins: 0,
    status: "small",
    star: false,
    setName: function (namePicked) {
        this.name = namePicked;
    },
    gotHit: function () {
        if (this.status === "powered up") {
            this.status = "big";
        } else if (this.status === "big") {
            this.status = "small";
        } else if (this.status === "small") {
            this.status = "dead";
        } else {
            console.log("your dead")
        }
    },
    gotPoweredUp: function () {
        if (this.status === "small") {
            this.status = "big";
        }
        if (this.status === "big") {
            this.status = "powered up";
        }
    },
    getActive: true,
    addCoin: function () {
        this.totalCoins++;
    },
    print: function () {
        console.log(`name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\nStar: ${this.star}
`)
    }
}
player.setName("mario");
//player.print();
player.addCoin();
player.addCoin();
player.addCoin();
player.addCoin();
player.addCoin();
player.gotPoweredUp();
player.gotPoweredUp();
player.star = true;
player.print();
player.gotHit();
player.addCoin();
player.addCoin();
player.star = false;
player.print();


