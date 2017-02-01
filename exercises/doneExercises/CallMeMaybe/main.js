//var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  
//
//for (var i = 0; i < names.length; i++){
//    attemptCall(names[i], dontCall, call, text)
//}
//
//function attemptCall(name, dontCall, call, text) {
//    if (name.length % 2 === 1){
//        dontCall(name)
//    }
//    if (name.lenght % 2 === 0){
//        call(name)
//    }
//}
//
//function dontCall(name){
//    console.log("you did not call " + name);
//}
//function call(name){
//    console.log("you called " + name);
//}
//function text(){
//    if 
//}

//var arr = ['bob', 'joe', 'allan', 'bob'];
//
//for (var i = 0; i < arr.length; i++) {
//    arr.toString()
//    
//    if (arr.length >= 2) {
//        console.log("your name has two or more letters")
//    } else {
//        console.log("your name is short")
//    }
//}

////////////////////class//////////////////////

var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];

for(var i = 0; i < names.length; i++){
    attemptCall(names[i], dontCall, call, sendText);
}

function attemptCall(name, dontCall, call, sendText) {
    name = name.toLowerCase();
    //if there is more than one "a" in the name
    if (name.lastIndexOf("a") !== name.indexOf("a")) {
        sendText(name);
    } else if (name.length % 2 !== 0) {
        dontCall(name);
    } else {
        call(name);
    }
}

function sendText(name) {
    console.log(`sent text to ${name}`);
}

function dontCall(name) {
    console.log(`didnt call ${name}`);
}

function call(name) {
    console.log(`called ${name}`)
}

