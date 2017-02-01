var timer = document.getElementById("timer");
var text = document.getElementById("theEnd")
var countDown = 2;
timer.textContent = countDown + 1;
var intervalId;

function updateTime(){
    timer.textContent = countDown;
    countDown--;
    if (countDown < 0) {
        clearInterval(intervalId);
        document.body.style.background = "url(http://blog.indeeco.com/wp-content/uploads/2014/12/explosion-proof.jpg)";
        timer.style.color = "white";
        
        text.style.color = "white";
        text.innerHTML = "THE END OF THE WORLD HAS COME UPON US!";
    }
}

intervalId = setInterval(updateTime, 1000);

