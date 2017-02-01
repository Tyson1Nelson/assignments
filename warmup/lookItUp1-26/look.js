var readline = require("readline-sync");

var dictionary = {};

function newWords(word, definition) {
    var dictionary = {
        name: object,
        definition: definition,
    };
    // dictionary.word = definition;  // doesn't work because it thinks I want "word" to be the property name instead of the actual word I'm trying to add
    dictionary[word] = definition;
    //console.log(dictionary);
}

function isDuplicate(word) {
    var isStored = word;
    if (word != isStored) {
        newWords(word, definition);
    }
}
var whatToDo = ["enter word", "look through dictionary"];

readline.keyInSelect(whatToDo, "what would you like to do??")
if (whatToDo[1] === true) {
    console.log("library")
}

var dictionaryWord = readline.question("what word would you like to put into the dictionary?")

var definition = readline.question("what is the definition of that word? ");
newWords(dictionaryWord, definition);

var askAgain = readline.keyInYN("would you like to enter some more? ")
if (askAgain === true) {
    var anotherWord = readline.question("what word? ");
    var anotherDef = readline.question("define word: ");
    newWords(anotherWord, anotherDef);
} else {
    console.log("continue");
}

var look = readline.keyInYN("would you like to look through you dictionary?")

if (look === true) {
    console.log(dictionary);
} else {
    console.log("maybe later");
}



////////////////////////////////////////////////
/////////////////////////////////////////

//var dictionary = [];
////as an array, i'm going to need to store objects in the array
//
//var dictionary = {};
//
//
//
//
//function addWord(word, definition){
//    dictionary[word] = definition;
//}
//
//function findWord (word){
//    if (dictionary[word] === undefined) {
//        console.log("thats not in the dictionary yet");
//    } else {
//        return dictionary[word];
//    }
//}
//