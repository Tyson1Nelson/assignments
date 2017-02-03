
function uniqueNewArray(arrays) {
    var output = [];
    for (var i = 0; i < arrays.length; i++) {
       output = output.concat(arrays[i]);
    }
    for (var i = 0; i < output.length; i++) {
        if (output.indexOf(output[i]) !== output.lastIndexOf(output[i])) {
            output = output.filter((item) => item !== output[i]);
            i = -1;
        }
    }
    return output;
}

var arrays = [[1, 2, 5], [1, 2, 8, 9, 10]];
var moreArrays = [[1, 2, 5], [1, 2, 8, 9, 10], [8, 35, 24]];
var allTheArrays = [[1, 2, 5, 20, 56, 530], [1, 2, 8, 9, 10, 47, 56, 24], [8, 35, 24, 56, 345, 23], [45, 67, 2, 4, 9, 67, 345]];

//console.log(uniqueNewArray(arrays));
//console.log(uniqueNewArray(moreArrays));
//console.log(uniqueNewArray(allTheArrays));

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

function findUniques(arr1, arr2) {
    var uniqueToArr1 = arr1.filter(function(item) {
        return arr2.indexOf(item)=== -1;
    });
    var uniqueToArr2 = arr2.filter(function(item) {
        return arr1.indexOf(item)=== -1;
    });
    return uniqueToArr1.concat(uniqueToArr2);
}
//console.log(findUniques([1, 2, 3, 8], [1, 2, 3, 4, 5, 6, 7, 8]));

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////


function findUniques() {
    var uniques = [];
    var dupes = [];
    for (var i = 0; i < arguments.length; i++) {
        for(var j = 0; j < arguments[i].length; j++) {
            
            if((uniques.indexOf(arguments[i][j]) === -1) && (dupes.indexOf(arguments[i][j]) === -1)) {
                uniques.push(arguments[i][j]);
            }  else if (uniques.indexOf(arguments[i][j]) >= 0)  {
                var index = uniques.indexOf(arguments[i][j]);
                uniques.splice(index, 1);
                dupes.push(arguments[i][j]);    
            } 
        }
    }
    return uniques;
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));  // [5, 8, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 3, 5], [8, 5, 9, 10], [5]));  // [2, 3, 8, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 2, 6], [9, 10]));  // [5, 6, 9, 10]  
console.log(findUniques([1, 2, 5], [1, 2], [8, 9, 10], [9, 10, 11, 12]));  // [5, 8, 11, 12]  