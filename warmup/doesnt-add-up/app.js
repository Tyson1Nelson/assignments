// addsUp(10, [5, 1, 5]) // true, because 5 + 5 === 10 addsUp(10, [2, 3, 1,

//function addsUp(comparer, add) {
//    console.log(add.length);
//    add.forEach(function (item, i) {
//        console.log(item === item);
//    });
//
//}
//console.log(addsUp(10, [2, 1, 7])) // true, because 5 + 5 === 10 addsUp(10, [2, 3, 1,

//var list = [1, 1, 2, 3, 4, 5, ]
//var uniquelist = list
//targetsum = 5
//for (n in list.combinations(uniquelist, 2)) {
//    if (n[0] + n[1] == targetsum) {
//        console.log(str(n[0]) + " + " + str(n[1]))
//    }
//}
var arr1 = [3, 4, 7,];

const addsUp = (int, arr) => {
    const total = arr.reduce((total, ele) => {
        return total + ele;
    })
    const test = arr.filter(ele => {
        const totals = total - ele;
        if (total === int) {
            return true;
        }
    });
    return test.length >= 1
};
console.log(addsUp(10, arr1));