// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
var app = {
  controllers: {
    imageController: new ImageController(),
    weatherController: new WeatherController(),
    quoteController: new QuoteController(),
    todoController: new TodoController()
  }
}

function startTime() {
  var today = new Date();
  var locale = today.toLocaleTimeString();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  if (h >= 13 && h <= 24) {
    h = h - 12;
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "PM";
    var t = setTimeout(startTime, 500);
  }
  else {
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s + "AM";
  
    var t = setTimeout(startTime, 500);
  }
}
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;

}