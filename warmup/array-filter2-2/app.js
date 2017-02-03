//////////////example of filter///////////////////

//var ourArray = ['pan', 'can', 'apple', 'sauce'];
//
//ourNewArray = ourArray.filter(function(item){
//    return item.length < 4;
//})
//
//console.log(ourNewArray);

//////////////////////////////////////////////////


Array.prototype.myFilter = function (callback) {
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++){
        if (callback(array[i])){
            newArray.push(array[i]);
     }
    }
    return newArray;
};

var numericArray = [8, 3, 4, 32, 1, 9, 3, 5, 42, 56];

var noLargeNumbers = numericArray.myFilter(function (element) {
    return element <= 5;
});

console.log(noLargeNumbers);

var ourArray = ['pan', 'can', 'apple', 'sauce'];

ourNewArray = ourArray.myFilter(function(item){
    return item.length < 4;
})

console.log(ourNewArray);