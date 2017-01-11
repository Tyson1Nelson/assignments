var name="dan"; //string

var age = "10"; //Number

var isAdmin = "true"; //boolean

//Other simple data types in Javascript include:
undefined;
null;
NaN;

//Complex data types

//Arrays
var students = ["morgan","Dan", "gabe"];
var ages = [3, 4, 5];
var admins = ["true", 42, "hello",[1, 2, 3] {}, function() {} ] //not the best practice, you probably need an object.

//Objects
var person = {
    firstName: "dan",
    lastName : "Pak",
    age: 23,
    isJapanese: false,
    speak: function () {
        console.log("hello there");
    }
};

var phone = {
    color: "black",
    brand: "Apple",
    version: "iPhone 7",
    memCapacity: "128gb",
    isJailBroken: false,
    case: {
        color: "black",
        brand: "Spigen"
    },
console.log(phone.brand); //"apple"
console.log(phone.case.brand); //"Spigen"
}