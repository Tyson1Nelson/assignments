var keepCount = localStorage.getItem("keepCount");
$("#count").text(keepCount);
$("#button").click(function () {
    var count = keepCount++
    count = count + 1
    localStorage.setItem('keepCount', count);
     $("#count").text(count)
});