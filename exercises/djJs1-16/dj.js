var box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.background = "blue";
    box.style.color = "red";
});

box.addEventListener("mousedown", function () {
    box.style.background = "red";
    box.style.color = "yellow";
})

box.addEventListener("mouseup", function () {
    box.style.background = "yellow";
    box.style.color = "green";
})

box.addEventListener("dblclick", function () {
    box.style.background = "green";
    box.style.color = "orange";
})

//var notBox = document.getElementsByClassName("notBox");
//
//notBox.addEventListener("wheel", function () { 
//    console.log("sdfsadf")
//    box.style.background = "orange";
//});

window.addEventListener('keyup', function () {
    if (event.keyCode === 66) {
        console.log("hello");
        box.style.background = "blue";
    } else if (event.keyCode === 82) {
        console.log("hello");
        box.style.background = "red";
    } else if (event.keyCode === 89) {
        console.log("hello");
        box.style.background = "yellow";
    } else if (event.keyCode === 71) {
        console.log("hello");
        box.style.background = "green";
    } else if (event.keyCode === 79) {
        console.log("70");
        box.style.background = "orange";
    };
}, false);