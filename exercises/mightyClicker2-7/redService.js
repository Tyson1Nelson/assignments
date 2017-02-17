angular.module("MyApp")

.service("RedService", [function () {
    this.redCounter = 100;
    
    this.incrament = function () {
        this.redCounter++;
        return this.redCounter;
    }
    
    this.decrament = function () {
        this.redCounter--;
        if(this.redCounter === 0) {
            this.reset();
        }
        return this.redCounter;
    }
    this.reset = function() {
        this.redCounter = 100;
    }
}])