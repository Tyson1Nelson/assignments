var testString = [];
var alphabet = "abcdefghijklmnopqrstuvwxyz";
for (var i =0; i < alphabet.length; i++){
    testString.push("co"+ alphabet[i] + "e");
}

function countCode(string){
    var checkString = "";
    var stringCount = 0;
    for(var i = 0; i < string.length; i++){
        if(string[i] === "c"){
            checkString = string[i] + string[i +1] + string[i +2] + string[i +3];
            if (testString.indexOf(checkString) >= 0){
                stringCount += 1;
            }
        }
    }
    console.log(stringCount);
}
countCode("dklpocodeslidjcodelsicoee");


////////////////////////////////////////////////////////////


var stringTest = "codeoldodjfakdkdoicodekdsosdfacoeedskfalkd"

function codeCount(string){
    var expressionToMatch = /co[a-z]e/gi;
    var matchCount = string.match(expressionToMatch).length;
    console.log(matchCount);
}
codeCount(stringTest);


/////////////////////////////////////////////////////////////



