// there are two teams.
//they will send a nuke
//10% chance they hit. if they do they win
//if not, its the other teams turn.

var isPanguinsTurn;
var year = 1950;

function Team(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function () {
        return this.population > 0;
    }
}

var penguins = new Team("panguins", "1000000");
var communists = new Team("communists", "1000000");

function sendNukes(party, onHit, onMiss) {
    year += .5;
    var didNukeHit = generateRandomNumber(0, 9);
    if (didNukeHit === 0) {
        onHit(party);
    } else {
        onMiss(party);
    }
}

function coinFlip() {
    if (generateRandomNumber(0, 1) === 0) {
        isPanguinsTurn = true;
        isPanguinsTurn = !isPanguinsTurn;
        console.log("hello");
        sendNukes(penguins, onHit, onMiss);
    } else {
        isPanguinsTurn = false;
        isPanguinsTurn = !isPanguinsTurn;
        console.log("goodbye");
        sendNukes(communists, onHit, onMiss);
    }
}


function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function onHit(whoGotNuked) {
    isPanguinsTurn = !isPanguinsTurn;
    whoGotNuked.population = whoGotNuked.population - generateRandomNumber(10000,500000);
    console.log(whoGotNuked.name + " got nuked and has a population of " + whoGotNuked.population + " in the year " + year);
}

function onMiss(party) {
    isPanguinsTurn = !isPanguinsTurn;
    console.log(party.name + " was lucky enough to not get hit in the year " +  year);
    
}
coinFlip()
while (communists.isAlive() && penguins.isAlive()) {
    if (isPanguinsTurn) {
        sendNukes(communists, onHit, onMiss);
    } else {
        sendNukes(penguins, onHit, onMiss);
    }
}
console.log("game over");