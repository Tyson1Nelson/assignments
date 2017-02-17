var calc = require("./calc");
console.log(calc.add);
function calculator(num1, num2, operation) {
    switch (operation) {
    case "add":
        return calc.add(num1, num2);
        break;
    case "sub":
        return calc.sub(num1, num2);
        break;
    case "mult":
        return calc.mult(num1, num2);
        break;
    case "div":
        return calc.div(num1, num2);
        break;
    case "exp":
        return cal.exp(num1, num2);
        break;
    }
}

console.log(calculator(1, 2, "mult"))