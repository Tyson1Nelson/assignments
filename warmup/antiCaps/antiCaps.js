function antiCaps(str) {
    for (var i = 0; i < str.length; i++) {
        var upp = str[i];

        if (upp === upp.toLowerCase()) {
            console.log(upp.toUpperCase());
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
//antiCaps('bAnAnA') // BaNaNa