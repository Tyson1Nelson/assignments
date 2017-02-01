//function camelCase(str) {
//    //return str.indexOf(" ");
//    if (str.indexOf(" ") >= 0) {
//        console.log("it has a space");
//        return str.slice(" ");
//    } else if (str.indexOf("/") >= 0) {
//        console.log("it has a /");
//    } else if (str.indexOf("_")) {
//        console.log("it has a _")  
//    } else {
//        cosole.log("string looks good")
//    }
//}
////camelCase("hello there");
//console.log(camelCase("hello there"));

////////////////////////////////////////////////
///////////CLASS EXAMPLE-FOR LOOP///////////////
////////////////////////////////////////////////

function camelCase(input){
    for(x=0; x<input.length; x++){
        if(input[x] === " " || input[x] === "/" || input[x] === "_" || input[x] === "-"){
            var y = input.substring(0,x);
            var z = input.substring(x+1,input.length);
            var upper = z.substring(0,1).toUpperCase() + z.substring(1);
            input = y + upper;
        }
    }
    console.log(input);
}

camelCase("hello_there im/here");

///////////////////////////////////////////////////
/////////////CLASS EXAMPLE-FOR LOOP////////////////
///////////////////////////////////////////////////

var camelCased = ""

function returnCamelCase (str) {
    var lowerCase = str.toLowerCase();
    for (var i = 0; i < lowerCase.length; i++) {
        if (lowerCase[i] === " " || lowerCase[i] === "-" || lowerCase[i] === "_") {
            camelCased += lowerCase[i + 1].toUpperCase();
            i++
        } else {
            camelCased += lowerCase[i];
        }
    }
    return camelCased;
}

console.log(returnCamelCase("I aTE_fRUIT-ToDaY"))
 