/*var aSmile = false
var bSmile = false;
if (aSmile === true && bSmile === true) {
    console.log("then both monkeys is smiling");
} else if ( (aSmile === true && bSmile === false) || (bSmile === true && aSmile === false ) ) {
    console.log("then one monkey is smiling");
} else {
    console.log("then neither monkey is smiling");
}*/
function greeting () {
    var date = new Date();
    var hour = date.getHours();

    if (hour < 12) {
        console.log("good Morning");
    } else if (hour >= 12 && hour < 17) {
        console.log("good afternoon")
    } else {
        console.log("good evening")
    }
}
greeting();