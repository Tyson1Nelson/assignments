document.getElementById("name").required = true;

var checkbox = document.getElementById("check");
var disses = ["i Kicked your Trash", "Im better than anyone", "The rest of you should just give up"];


$("#submitButton").click(function () {
    if ($("#myForm").valid()){
        var trash = [];

        if (checkbox.checked) {
            if (generateRandomNum(1, 3) === 1) {
                trash.push(disses[0]);
            } else if (generateRandomNum(1, 3) === 2) {
                trash.push(disses[1]);
            } else {
                trash.push(disses[2])
            }
        } else {
            trash.push("No Comment")
            console.log("checkbox isnt checked");
        }

        trash = trash.toString("")
        var name = $("#name").val();
        var game = $("#game").val();
        var date = $("#date").val();
        var highScore = $("#highScore").val();
        var row = 
        `<tr>
            <td>${name}</td>
            <td>${game}</td>
            <td>${date}</td>
            <td>${highScore}</td>
            <td>${trash}</td>
        </tr>`;
        
        $("#tableRow").prepend(row);
        $("#myForm")[0].reset();

        
    } else {
        alert("You need to fill out all the 'REQUIRED' fields")
    }
});


function generateRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
