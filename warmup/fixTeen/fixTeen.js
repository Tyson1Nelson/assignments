
//function person(personAge){
//    if(personAge >= 13 && personAge <= 14){
//        personAge = 0;
//        addAges(personAge);
//    } else if(personAge >= 15 && personAge <=  16) {
//        fixTeen(personAge);
//    } else if(personAge >= 17 && personAge <= 19) {
//        personAge = 0;
//        addAges(personAge);
//    } else {
//         console.log("something");
//    }
//}
//
//function fixTeen(teen1) {
//    console.log(teen1);
//}
//person(17);
//
//function addAges(age) {
//    console.log(age);
//}

///////////////////////////////////////////////////////////////////


//write the noTeenSum function
    //Take 3 values and send to the helper function
    //Which will turn 13, 14, 17, 18, and 19 into 0 and
    //leave everything else alone
function noTeenSum(a, b, c, callback){
    return callback(a) + callback(b) + callback(c);
}
//helper function
    //use conditional to decide if we should turn the number into 0 or 
    //leave it alone
function fixTeen(n){
    n = Number(n)
    if (n >=13 && n <= 19 && n !==15 && n !==16){
        n = 0;
    }
    return n;
}



console.log(noTeenSum(1, 2, 3, fixTeen)); //→ 6 
console.log(noTeenSum(2, 13, 1, fixTeen)); //→ 3 
console.log(noTeenSum(2, 1, 14, fixTeen)); //→ 3 
console.log(noTeenSum(2, 15, 14, fixTeen)); //→ 17)