var fruit = ["banana", "apple", "orange", "watermelon"];  

var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

vegetables.pop();
//console.log(vegetables);
fruit.splice(0,1);
//console.log(fruit);


console.log(fruit.indexOf("orange"));
fruit.push(1);
//console.log(fruit);
console.log(vegetables.length);
vegetables.push(3);
//console.log(vegetables);

var food = fruit.concat(vegetables);
//console.log(food);

food.splice(4,2);
//console.log(food);

food.reverse();
//console.log(food);

//food.toString();
console.log(food.toString());
