
// get/ access all time hands
var hourhand = document.querySelector(".hourhand");
var minhand = document.querySelector(".minhand");
var sechand = document.querySelector(".sechand");

setInterval(function(){

// get time
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

// fornula

let hr = hour*30 + min/2;
let m = min *6;
let s = sec*6;


hourhand.style.transform =`rotate(${hr}deg)`;
minhand.style.transform =`rotate(${m}deg)`;
sechand.style.transform =`rotate(${s}deg)`;
},1000)