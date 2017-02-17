angular.module("cartoonApp")

.service("cartoonService", [ function () {
    var cartoonCharacter= [];
    
    this.addCartoon = function(newCartoon) {
        cartoonCharacter.push(newCartoon);
            return cartoonCharacter;
    }
}])