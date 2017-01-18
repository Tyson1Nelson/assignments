document.getElementById("buttonMult").addEventListener("click", function () {
    var firstIndex = document.getElementById("multNum1").value;
    var secondIn = document.getElementById("multNum2").value;
    console.log(secondIn * firstIndex);
    document.getElementById("total1").textContent = firstIndex * secondIn
})


document.getElementById("buttonAdd").addEventListener("click", function () {
    var firstIndex = document.getElementById("add1").value;
    var secondIn = document.getElementById("add2").value;
    console.log(secondIn + firstIndex);
    document.getElementById("total2").textContent = parseInt(firstIndex) + parseInt(secondIn)
})


document.getElementById("buttonSub").addEventListener("click", function () {
    var firstIndex = document.getElementById("subtract1").value;
    var secondIn = document.getElementById("subtract2").value;
    console.log(secondIn - firstIndex);
    document.getElementById("total3").textContent = firstIndex - secondIn
})
