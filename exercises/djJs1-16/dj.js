var box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    box.style.background = "blue";
    box.style.color = "red";
})

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

var body = document.getElementById("body")


box.addEventListener("wheel", function () {
    if(!box) {
    box.style.background = "orange";
    }
})
//make two empty div's with a left margin of 500px and one with the top margin of 500px.
box.addEventListener("keypress", function (event) {
    if (event.keyCode === 66) {
        box.style.background = "blue";
    }
})