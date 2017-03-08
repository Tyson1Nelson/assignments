angular.module("MyApp")

.service("BlueService", [function () {
    this.blueCounter = 100;
    
    this.incrament = function () {
        this.blueCounter++;
        return this.blueCounter;
    }
    
    this.decrament = function () {
        this.blueCounter--;
        if(this.blueCounter === 0) {
            this.reset();
        }
        return this.blueCounter;
    }
}])