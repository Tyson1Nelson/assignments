
var phrase = 'slimy smelly solution';

//function that takes a string and outputs the num of occurances of each letter in the string
function letterCount(str) {
    //create object for keeping track of the letter count.
    var count = {};
    var uniques = "";
    //loop through the string to get access to each letter
    for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        //if that oubject already had that letter 
        if (count[letter] !== undefined) {
            //incrament it by 1
            count[letter]++;
        } else {
             //create a new property for that letter and set it to 1
            count[letter] = 1;
            uniques += letter;
        }       
    }
    //print out the letter and the number of times that letter was found
    //console.log(count);
    //console.log(uniques);
    return count;
}


function sortFrequency(count){
    var sortedKeys = Object.keys(count).sort(function(a, b){
        return count[b] - count[a];
    })
    var sortedFrequency = {};
    for (var i = 0; i < sortedKeys.length; i++){
        sortedFrequency[sortedKeys[i]] = count[sortedKeys[i]];
    }
    return sortedFrequency;
}
console.log(sortFrequency(letterCount(phrase)));
letterCount(phrase);