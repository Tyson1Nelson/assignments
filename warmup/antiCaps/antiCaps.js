
function antiCaps(str) {
    for (var i = 0; i < str.length; i++) {
        var upp = str[i];
//        console.log(str[i]);
        var string = [];
        if (upp === upp.toLowerCase()) {
            upperCase = upp.toUpperCase();
            console.log(upperCase);
        } else {
            isCaps(upp);
        }
    }
}


function isCaps(letter) {
    if (letter === letter.toUpperCase()) {
        console.log(letter.toLowerCase());
    }
}
//console.log(antiCaps('Hello'));

antiCaps('Hello'); // hELLO  
antiCaps('racEcar'); // RACeCAR  
antiCaps('bAnAnA') // BaNaNa