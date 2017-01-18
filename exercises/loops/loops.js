var car = "suzuki";
for (var i = 0; i < car.length; i++) {
    console.log(car[i]);
}

//for (var i = 0; i < 43; i++) {
//console.log(i);
//}

function findLetter(inputString, inputChar) {
    for (var i = 0; i < inputString.length; i++) {
        if (inputString[1] === inputChar) {
            return inputString.indexOf(inputChar);

        }
        return inputChar + " was not found in " + inputString
    }
}
console.log(findLetter("hello", "l"));

function findLowestNumber(arrayTen) {
    var lowest = arrayTen[0];
    for (var i = 0; i < arrayTen.length; i++) {
        if (arrayTen[i] < lowest) {
            lowest = arrayTen[i];
        }
    }
    return lowest;
}
console.log(findLowestNumber([-1, 7, 2, 3, 5, 42, 3425, 4, 5]))