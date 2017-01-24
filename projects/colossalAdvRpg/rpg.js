var readline = require('readline-sync');
var userName = readline.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var startAdv = readline.keyInYN('Are you ready to start your Adventure?');
if (startAdv === true) {
    console.log("Lets get started!");
} else {
    console.log("come back when you are ready");
}
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
    if (randomNum(1, 3) === 1) {
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
    console.log("your health is " + playerHealth);
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
    var enemyHealth = randomNum(25, 80);
    attackOrRun(enemyEncountered, enemyHealth);
}

function attackOrRun(enemy, health) {
    var attkOrRun = readline.keyInYN("you're currently facing a " + enemy + " with " + health + " health points, proceed with attacking?!")
    if (attkOrRun === true) {
        fighting(enemy, health);
    } else {
        escape(enemy, health);
    }
}

function fighting(enemyEncountered, enemyHealth) {
    var attack = randomNum(1, 40);
    var enemyAttacking = randomNum(1, 70);
    enemyHealth = enemyHealth - attack;
    playerHealth = playerHealth - enemyAttacking;
    console.log("You've done " + attack + " points of damage");
    console.log(enemyEncountered + " has " + enemyHealth + " hp");

    if (enemyHealth > 0 && playerHealth > 0) {
        console.log("enemy has done " + enemyAttacking + " points of damage");
        console.log("you currently have " + playerHealth + " points");
        attackOrRun(enemyEncountered, enemyHealth);

    } else if (enemyHealth <= 0) {
        console.log("You have defeated " + enemyEncountered);
        var randomItem = items[randomNum(0, 3)];
        inventory(randomItem);
        playerHealth = playerHealth + 10;
        console.log("You now have " + playerHealth + " hp");

    } else if (playerHealth <= 0) {
        console.log("enemy has done " + enemyAttacking + " points of damage");
        console.log("you currently have " + playerHealth + " points");
        console.log("Game Over")
    } else {
        attackOrRun(enemyEncountered, enemyHealth);
    }
}

function escape(enemy, health) {
    if (randomNum(1, 2) === 1) {
        console.log("You've escaped succesfully");
    } else {
        console.log("you are unable to escape ");
        fighting(enemy, health);
    }
}

function attack() {
   
}