
document.getElementById("submitBobombs").addEventListener("click", function bombs() {
    var bobOmbs = parseInt(document.getElementById("inputNum1").value);
    var bobOmbsTotal = bobOmbs * 7;
  //console.log(bobOmbsTotal); 
document.getElementById("total1").textContent = bobOmbsTotal;
})

document.getElementById("submitGoombas").addEventListener("click", function () {
    var goombas = parseInt(document.getElementById("inputNum2").value);
    var goombasTotal = goombas * 5;
  console.log(goombasTotal);  document.getElementById("total2").textContent = goombasTotal;
})

document.getElementById("submitCheeps").addEventListener("click", function () {
    var goombas = parseInt(document.getElementById("inputNum3").value);
    var goombasTotal = goombas * 11;
  console.log(goombasTotal);  document.getElementById("total3").textContent = goombasTotal;
});

