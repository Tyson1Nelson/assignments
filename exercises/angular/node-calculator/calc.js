var calculator = {
   add: function(num1, num2) {
        console.log(num1, num2)
        return num1 + num2;
    },

    sub: function(num1, num2) {
        return num1 - num2;
    },


    div: function(num1, num2) {
        if (num2 === 0) {
            return 0;
        }
        return num1 / num2;
    },

    mult: function(num1, num2){
        return num1 * num2;
    },

    exp: function(num1, num2) {
        return Math.pow(num1, num2);
    }
}


module.exports = calculator;

//Subtractor.prototype.subtract = function(){
//    return this.num1 - this.num2;
//}

//module.exports = Subtractor;