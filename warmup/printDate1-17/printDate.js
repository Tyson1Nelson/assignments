//my mess


/*function dayOfWeek() {
    var day = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day2 = weekday(day.getDay());
    return console.log(day2);
    //date and current time
}
dayOfWeek();*/


//Class example

/*function getDay() {
    var today = new Date();
    var day = today.getDay();
    var days = ["sunday", "monday", "tuesday"]
    console.log( "today is: " + days[day]);
    var time = today.toLocaleTimeString();
    console.log("the time is: " + time);
}
getDay();*/

//class example

var newDate = function() {
    date = new Date();
    fullDate = date.toString();
    console.log(fullDate);
    console.log("time is: " + fullDate(0,3));
    console.log("this is the date " + fullDate.slice(16,fullDate.length));
}
newDate();