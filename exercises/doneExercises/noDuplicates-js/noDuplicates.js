//my version

/*var item = "bookshelf";

//funtion removeItemCopies() {
    for(var i = 0; i < item.length; i++)
    var newItem = item.indexOf("e", i);
        console.log(newItem[i]);
//}
//removeItemCopies();*/





//class version

function noDupes(string) {
    //lowercase letters
    string = string.toLowerCase();
    //create an empty string for unique letters
    //create an empty string for the misfits (duplicates)
    var uniques = "";
    var misfits = "";
    
    //loop through each letter in the lowercase string
    for(var i = 0; i < string.length; i++) {
        //check if the current letter is already in the unique letters string
        if(uniques.indexOf(string[i]) !== -1) {
            misfits += string[i];
        } else { 
            uniques += string[i];
        }  
            //put it in the duplicates string
        //else
            //put it in the unique letters string
    }
    //console.log uniques and the misfits/duplicates
    console.log("no Duplicates: " + uniques);
    console.log("extras: " + misfits);
}
noDupes("bookeeper larry");


//class example

"abcd".indexOf("a"); // 0
"abcd".indexOf("b"); // 1
"abcd".indexOf("c"); // 2
"abcd".indexOf("d"); // 3