
var readline = require("readline-sync");  

//var name = readline.question("what is your name?")
//console.log("hello " + name + " lets start our adventure");

var input = ["walk", "look", "inventory"];
var options = readline.keyInSelect(input, "what would you like to do?");

if(options === 0){
    walk();
} else if (options === 1){
    look();
} else {
    console.log(inventory);
 }
var inventory = [];

function walk () {
    if (generateRandomNum(1,2) === 1){
        console.log("walking")
        console.log(options);
    } else if (generateRandomNum(1,2) === 2) {
        console.log("other")
    }

}

function look() {
    console.log("looking")
}

function generateRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomObject () {
    if(generateRandomNum(1,23) === 1){
        inventory.push("knife")
    }
}


////////////////////////////////////////////////////////////

