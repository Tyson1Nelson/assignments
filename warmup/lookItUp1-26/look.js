var readline = require("readline-sync");

var dictionary = [];

function newWords(object, definition) {
    var newDictionary = {
        name: object,
        definition: definition,
    };
    // dictionary.word = definition;  // doesn't work because it thinks I want "word" to be the property name instead of the actual word I'm trying to add
    isDuplicate(newDictionary)
};

function isDuplicate(obj) {
    for (dict of dictionary) {
        if (dict.name === obj.name) {
            console.log("ERR----You already have '" + obj.name + "' in your Dictionary");
            console.log("\n----------------\n" + "name: " + dict.name);
            console.log("description: " + dict.definition + "\n----------------\n");
            makeSelection();
        };
    };
    dictionary.push(obj);
    console.log(dictionary);
    makeSelection();
};

var options = ["Enter word", "Look through dictionary"];

function makeSelection() {
    var selection = readline.keyInSelect(options, "what would you like to do?? \n");
    if (selection === 0) {
        ask();
    }
    if (selection === 1) {
        check();
    };
};

function ask() {
    var dictionaryWord = readline.question("what word would you like to put into the dictionary? \n")
    var definition = readline.question("what is the definition of that word? \n");
    newWords(dictionaryWord, definition);
};

function check() {
    if (dictionary.length > 0) {
        console.log("\n" + "You entered 'Look through dictionary'");
        look()
    } else {
        console.log("Nothing In Dictionary \n");
        makeSelection();
    };
};

function look() {
    var look = readline.keyInYN("would you like to look through you dictionary? " + "\n");
    if (look === true) {
        for (var i = 0; i < dictionary.length; i++) {
            console.log("\n" + "name: " + dictionary[i].name);
            console.log("definition: " + dictionary[i].definition + "\n---------------------");
        }
        makeSelection();
    } else {
        console.log("\n" + "Ok, maybe later...");
        makeSelection();
    }
}
makeSelection();


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