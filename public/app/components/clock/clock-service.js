// function ImageService() {
   
//     var today = new Date();
//     var locale = today.toLocaleTimeString();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();

//     this.getClock = function (cb) {
//         m = checkTime(m);
//         s = checkTime(s);
//         if (h >= 13 && h <= 24) {
//             h = h - 12;
//             document.getElementById(‘time’).innerHTML =
//                 h + “:” + m + “:” + s + ” PM”;
//             var t = setTimeout(startTime, 500);
//         } else {
//             document.getElementById(‘time’).innerHTML =
//                 h + “:” + m + “:” + s + ” AM”;
//             var t = setTimeout(startTime, 500);
//         }
//     }
// }