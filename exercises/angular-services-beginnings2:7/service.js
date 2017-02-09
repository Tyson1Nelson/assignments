angular.module("MyPokeApp")

.service("pokeService", [function () {
    var that = this;
    
    that.arr = [];
    that.addPokemon = function (input) {
        that.arr.push(input);
    }
    
    that.removePokemon = function (name) {
        var newName = that.arr.indexOf(name)
        if (newName !== -1)
        that.arr.splice(newName, 1);
        
    }
}])