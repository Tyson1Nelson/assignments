var myScore = 161;
var highScore= 80;

if (myScore > highScore) {
    console.log("you set a new high score");
    if (myScore >= highScore * 2) {
    console.log("you a big winner");
    } else {
        console.log("your just a plain winner")
    }
} else if (myScore === highScore) {
    console.log("You tied the high score. So Close!");
} else if (myScore > highScore){
    console.log("you set a new high score.")
} else {
    console.log("loser");
}

//if (currentTime > wakeUptime) {
    //console.log("running late")
//}