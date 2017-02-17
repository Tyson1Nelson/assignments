function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isShip() {
    return getRandomInt(1, 5) === 5;
}

function Location () {
    this.isShip = isShip();
    this.guessed = false;
    this.display = "~"
}

module.exports = Location;