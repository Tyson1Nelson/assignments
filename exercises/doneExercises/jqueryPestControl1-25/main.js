var audio = document.getElementById("coin");

$("#submitBobombs").click(function () {
    var bobOmbs = $("#inputNum1").val();
    bobOmbs = parseInt(bobOmbs);
    var bobOmbsTotal = bobOmbs * 7;
    //console.log(bobOmbsTotal); 
    $("#total1").text(bobOmbsTotal);
    audio.play();
    
})

//$("#submitBobombs").click(function() {
//    $("#coin").play();
//}
    
$("#submitGoombas").click(function () {
    var goombas = $("#inputNum2").val();
    goombas = parseInt(goombas);
    var goombasTotal = goombas * 5;
    console.log(goombasTotal);
    $("#total2").text(goombasTotal);
    audio.play();
})

$("#submitCheeps").click(function () {
    var cheeps = $("#inputNum3").val(); 
    cheeps = parseInt(cheeps);
    var cheepsTotal = cheeps * 11;
    console.log(cheepsTotal);
    $("#total3").text(cheepsTotal);
    audio.play();

});

$("#nightView").click(function() {
    $("main").css("background-image", "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkI90GMyTYoz2yr5Z-vM121jZY6snzzjZYxmotk5LGN72uxApY')");
    $("main").css("color", "grey");
    $(".pic p").css("background-color", "rgba(0, 0, 0, 0.68)");
    $("body").css("background-image", "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTXDTCdKr4C9gxDeZD7bT1SXglIifyUQT-Dpz9GoVmRtQY2fgwh-g')");
    $("body").css("background-image", "contain");
});


/////////////////////////////////////////////////////


//document.getElementById("submitBobombs").addEventListener("click", function bombs() {
//    var bobOmbs = parseInt(document.getElementById("inputNum1").value);
//    var bobOmbsTotal = bobOmbs * 7;
//  //console.log(bobOmbsTotal); 
//document.getElementById("total1").textContent = bobOmbsTotal;
//})
//
//document.getElementById("submitGoombas").addEventListener("click", function () {
//    var goombas = parseInt(document.getElementById("inputNum2").value);
//    var goombasTotal = goombas * 5;
//  console.log(goombasTotal);  document.getElementById("total2").textContent = goombasTotal;
//})
//
//document.getElementById("submitCheeps").addEventListener("click", function () {
//    var goombas = parseInt(document.getElementById("inputNum3").value);
//    var goombasTotal = goombas * 11;
//  console.log(goombasTotal);  document.getElementById("total3").textContent = goombasTotal;
//});