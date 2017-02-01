

function noRepeat(str) {
     checkLetter = "";
    for (var i = 0; i < str.length; i++){
        console.log(str[i]);
        if(str[i] === str[i]){
            console.log(str);
        }
    }
}
//noRepeat("ggggggggxkljfvlsjkfg");


//////////////////class example////////////////////

function firstRepeat(string) {
    checkLetter = "";
    for (var i = 0; i < string.length; i++) {
        if (checkLetter === "") {
            checkLetter += string[i];
        } else if (checkLetter.indexOf(string[i]) < 0) {
            console.log (string[i]);
            break;
        }
    }
}

firstRepeat("gggggysudfygsuvy");