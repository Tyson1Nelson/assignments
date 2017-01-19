/*function add(a,b) {
    var added = parseInt(a)+parseInt(b);
    console.log(added)
}
add(1,3);*/

//function greatestNum(a, b, c) {
//    var max1 = Math.max(a, b, c);
//    if (a > b && a > c) {
//        return a;
//    } else if (b > a && b > c) {
//        return b;
//    } else {
//        return c;
//    }
//}
//console.log(greatestNum(55, 77, 45));
//console.log(maximum);

//write a function that checks odd or even

//function oddEven(n) {
//    if (n % 2 === 0) {
//        console.log("even");
//    } else {
//        console.log("odd");
//    }
//}
//oddEven(38);

function string(x) {
    var length = x.length;
    if (length <= 20) {
        return x + " " + x;
    } else {
     return x.substr(0, length / 2);
    }
}
console.log(string("string is so freaking long"));