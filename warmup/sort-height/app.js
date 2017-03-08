function avoidObsticals(input) {
    var noTree = input.filter((item) => item !== -1).sort((a, b) => a - b);
    for (var i = 0, j = 0; i < input.length; i++) {
        if (input[i] === -1) {
            continue;
        }
        input[i] = noTree[j];
        j++;
    }
    return input;
}

var people = [-1, 150, 190, 170, -1, -1, 160, 180];

console.log(avoidObsticals(people));

///////////////////////////////////////////////////////////////////

var array = [-1, 150, 190, 170, -1, -1, 160, 180];

function arrangeByHeight(array) {
    var treeArray = [];
    var height = [];
    var finalArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === -1) {
            treeArray.push(i)
        } else {
            height.push(array[i]);
        }
    }
    height.sort(function (a, b) {
        return a - b
    });
    for (var j = 0; j < array.length; j++) {
            if (j !== treeArray[0]) {
                finalArray.push(height[0]);
                height.splice(0, 1);
            } else {
                finalArray.push(-1);
                treeArray.splice(0, 1);
            }
    }
    return finalArray;
}

console.log(arrangeByHeight(array));