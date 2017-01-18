var box = document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.background = "blue";
    box.style.color = "red";
})

box.addEventListener("mousedown", function() {
    box.style.background = "red";
    box.style.color = "yellow";
})

box.addEventListener("mouseleave", function() {
    box.style.background = "yellow";
    box.style.color = "green";
})

box.addEventListener("dblclick", function() {
    box.style.background = "green";
    box.style.color = "orange";
})

var body = document.getElementById("body")

body.addEventListener("wheel", function() {
    box.style.background = "orange";
})