var audio1 = $("#sound01")[0];
$("#sound1").mouseenter(function() {
  audio1.play();
}).mouseleave(function() {
  audio1.pause();
});

var audio2 = $("#sound02")[0];
$("#sound2").mouseenter(function() {
  audio2.play();
}).mouseleave(function() {
  audio2.pause();
});

var audio3 = $("#sound03")[0];
$("#sound3").mouseenter(function() {
  audio3.play();
}).mouseleave(function() {
  audio3.pause();
});

var audio1=document.querySelector("#sound01");
audio1.volume=0.15;
var audio2=document.querySelector("#sound02");
audio2.volume=0.15;
var audio3=document.querySelector("#sound03");
audio3.volume=0.15;
