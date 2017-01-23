var names = ["Anna", "Bill", "Charlay", "Dexter", "Emily", "Frank", "George", "Hal", "Isaac", "Jill"];  

for (var i = 0; i < names.length; i++){
    attemptCall(names[i], dontCall, call, text)
}

function attemptCall(name, dont, call, sendText) {
    if (name.length % 2 === 1){
        dontCall(name)
    }
    if (name.lenght % 2 === 0){
        call(name)
    }
}

function dontCall(name){
    console.log("you did not call " + name);
}
function call(name){
    console.log("you called " + name);
}
function text(){}

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