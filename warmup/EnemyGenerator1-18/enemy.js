var enemies = [];

/*********************************
 ******** HELPER FUNCTIONS ********
 *********************************/

// "max" in inclusive
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function determineType() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var rand = getRandomInt(0, 2);
    return enemyTypes[rand];
}

function determineHitPoints(type) {
    if (type === "Ancient Dragon") {
        return getRandomInt(80, 100);
    } else if (type === "Prowler") {
        return getRandomInt(50, 79);
    } else {
        return getRandomInt(20, 49);
    }
}

/*********************************
 ***** CONSTRUCTOR FUNCTIONS *****
 *********************************/
function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

/*********************************
 ********* MAIN FUNCTION *********
 *********************************/

function makeEnemies(num) {
    for (var i = 0; i < num; i++) {
        var newEnemy = new Enemy();
        enemies.push(newEnemy);
    }
}

makeEnemies(100);
console.log(enemies);