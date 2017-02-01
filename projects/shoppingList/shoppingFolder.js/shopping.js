var groceryList = JSON.parse(localStorage.getItem("list")) || [];
//var storedItem = localStorage.getItem();

function showList() {
    for (var i = 0; i < groceryList.length; i++) {
        var newList = groceryList[i];
        var buttonId = "cancel" + i;
        $("#output").prepend(`<li><button id=${buttonId} type="delete">${"x"}</button><span id=${newList}> ${newList}</span></li>`);
        var removeId = $("#" + buttonId);

        $("#" + buttonId).click(function (i) {
            console.log(i);
            var groceryList = JSON.parse(localStorage.getItem("list")) || [];
            console.log("gl " + groceryList);
//            $(this).find(groceryList[i]);
            for (var j = 0; j < groceryList.length; j++) {
                if (groceryList[j] === item) {
                    alert("if");
                    groceryList.splice(j, 1);
                    break;
                }
            }
            console.log("**** " + item);
            console.log("gl2 " + groceryList);
            localStorage.setItem("list", JSON.stringify(groceryList));
            removeId.parent().remove();
        });
    }
}
showList();



$("#reset").click(function () {
    $("#output").remove();

})

$("#add").click(function () {
    var item = $("#input").val();
    groceryList.push(item);
    localStorage.setItem("list", JSON.stringify(groceryList));
    //    localStorage.setItem(item, item);
    var unorderedList = `<li><button id="cancel" type="delete">${"x"}</button> ${item}</li>`;
    $("#output").prepend(unorderedList);

    $("#cancel").click(function () {
        $(this).parent().remove();
    })
    showList();
});