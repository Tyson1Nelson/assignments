var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

function uptown(lyrics) {
    var string = "";
    for(i = 0; i < lyrics.length; i++){
        string += lyrics[i] + " ";
    }
    console.log(string);
}
uptown(lyrics);





function uptown(lyrics) {
    var string = "";
    for(i = lyrics.length-1; i >= 0; i--){
        string += lyrics[i] + " ";
    }
    console.log(string);
}
uptown(lyrics);




function backWards(lyrics) {
    console.log(lyrics.reverse().join(" "));
}
backWards(lyrics);

function everyOtherWord(lyrics) {
    //empty string where ill build up the final string;
    var everyOtherWords = "";
    //Loop through the array, adding every other item
    //to the final lyrics string
    for(var i = 0; i < lyrics.length; i += 2) {   //i +=2 iteration instead of i++
        everyOtherWords += lyrics[i] + " ";
        }
    console.log(everyOtherWords);
}
//everyOtherWord(lyrics);




/*function flipLyrics(lyrics) {
    var final = "";
    for(var i = 1; i <= lyrics.length; i += 2) {
        string += lyrics[i] + " ";
        string += lyrics[i - 1] + " ";
        if(lyrics.length % 2 === 0) {
            continue
        } else if (i === lyrics.length) {
            string += lyrics[i-1]
        }
    }
    console.log(string);
}
flipLyrics(lyrics);*/

//debug and fix errors on this
//notes taken and presented by other class members
