var readline = require("readline-sync");

/*var name = readline.question("What is your name? ");

console.log("Hi " + name.toUpperCase());

var age = readline.question("how old are you? ");
console.log(age + " is a good age!!!");

var animal = readline.question("what is you favorite animal? ")
console.log(animal);

var favColor = readline.question("what is your favorite color? ");
console.log(favColor + " has " + favColor.length + " letters in it!");

var joinedColorAnimal = animal.concat(favColor) 
console.log("your animal is " + joinedColorAnimal)*/

var longString = readline.question("please write a little something about yourself, please use more than 20 letters: ");
var startFromN = readline.question("your string has " + (longString.length) + " characters in it. where would you like to start? 1 to " + (longString.length) + " ")

function fromN(str,n ) {
    

        var ourNewWord = "";
        for (var i = n; i < str.length; i++){
            ourNewWord = ourNewWord + str[i];
        }  
        return(ourNewWord); 
}
console.log(fromN(longString, startFromN));