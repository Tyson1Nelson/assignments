var myForm =
    document.getElementById("myForm");

var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    var firstName = myForm.elements.firstName.value
    var lastName = myForm.elements.lastName.value;
    var age = myForm.elements.age.value;
    var gender = myForm.elements.gender.value;
    var state = myForm.elements.states.value;
    var dietRestrictions = [];
    if (document.getElementById("check1").checked) {
        dietRestrictions.push(" Vegitarian");
    }
    if (document.getElementById("check2").checked) {
        dietRestrictions.push(" Kosher");
    }
    if (document.getElementById("check3").checked) {
        dietRestrictions.push(" Lactose");
    }
    if (document.getElementById("check4").checked) {
        dietRestrictions.push(" Vegan");
    }
    alert("First Name: " + firstName + " Last Name: " + lastName + " Age: " + age + " Gender: " + gender + " Location " + state + " Dietary Restrictions: " + dietRestrictions);
})