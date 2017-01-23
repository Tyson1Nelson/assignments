var readline = require('readline-sync');
//var userName = readline.question('May I have your name? ');
//console.log('Hi ' + userName + '!');
//var startAdv = readline.keyInYN('Are you ready to start your Adventure?');
//if (startAdv === true) {
//    console.log("Lets get started!");
//} else {
//    console.log("come back when you are ready");
//}
var options = ["Walk", "Look", "Check Inventory"];

var playerHealth = 100;
var enemies = ["Dragon", "Zombie", "Troll"]
var items = ["knife", "shield", "potions", "emerald"];
var usersItems = ["sword", "sheild", "dagger"];

while (playerHealth > 0) {
    var doing = readline.keyInSelect(options, "what would you like to do?");
    if (doing === 0) {
        walk();
    } else if (doing === 1) {
        look();
    } else {
        inventory();
    }
}

function walk() {
    if (randomNum(0, 3) === 0) {
        enemiesAttack();
    } else {
        console.log("So far you are safe on your journey!")
    }
}

function look() {
    if (randomNum(1, 2) === 1) {
        console.log("Our journey looks bright!");
    } else {
        console.log("Theres nothing new to see...");
    }
}

function inventory(itemToAdd) {
    if (itemToAdd) {
        usersItems.push(itemToAdd);
    }

    console.log(usersItems);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function enemiesAttack() {
    var enemyEncountered = enemies[randomNum(0, 2)]
    var enemyHealth = randomNum(1, 50);
    attackOrRun(enemyEncountered, enemyHealth);
}

function attackOrRun(enemy, health) {
    var attkOrRun = readline.keyInYN("you're currently " + enemy + " proceed attacking?!")
    if (attkOrRun === true) {
        fighting(enemy, health);
    } else {
        escape();
    }
}

function fighting(enemyEncountered, enemyHealth) {
    var attack = randomNum(1, 70);
    console.log("You've done " + attack + " points of damage");
    enemyHealth = enemyHealth - attack;
    console.log(enemyHealth);
    if (enemyHealth < 0) {
        var randomItem = items[randomNum(0, 3)];
        inventory(randomItem);
    } else {

    }
}

function escape() {
    if (randomNum(1, 2) === 1) {
        console.log("You've escaped succesfully");
    } else {
        console.log("you are unable to escape ");
    }
}

function attack() {
    randomNum(1, 70);
}
enemies[randomNum(0, 2)]