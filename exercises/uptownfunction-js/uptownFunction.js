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
    for(i = lyrics.length-1; i >= 0; i){
        string += lyrics[i] + " ";
    }
    console.log(string);
}
uptown(lyrics);