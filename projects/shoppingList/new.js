$("#add").click(addItem);
$("#input").keypress( function(e){
    if (e.which === 13){
        e.preventDefault()
        addItem();
        console.log(e);
    }
})

function addItem() {
    var item = $("#input").val();
    if (item === "") {
        console.log('empty string');
    } else {
        var unorderedList = `<li><button class="cancel" type="delete">${"x"}</button> ${item}</li>`;
        $("#output").prepend(unorderedList);
        $("#myForm")[0].reset();
        $(".cancel").click(removeItem)
    }
}
function removeItem () {
    $(this).parent().remove();
}
