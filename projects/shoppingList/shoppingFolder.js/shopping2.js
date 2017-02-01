var groceryList = JSON.parse(localStorage.getItem("list")) || [];
//var storedItem = localStorage.getItem();
function removeListItem(removeId, item) {

    var groceryList = JSON.parse(localStorage.getItem("list")) || [];
    console.log("gl " + groceryList);
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
    //  localStorage.removeItem();

}

function showList() {
    for (var i = 0; i < groceryList.length; i++) {
        var newList = groceryList[i];
        var buttonId = "cancel" + i;
        $("#output").prepend(`<li><button id=${buttonId} type="delete">${"x"}</button><span id=${newList}> ${newList}</span></li>`);
        var removeId = $("#" + buttonId);

        $("#" + buttonId).click(removeListItem(removeId, groceryList[i]));


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