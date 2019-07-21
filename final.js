var _tim1 = document.getElementById('stim1');
var _tim2 = document.getElementById('stim2');
var _tim3 = document.getElementById('stim3');
var _tim4 = document.getElementById('stim4');
var _alarm2 = document.getElementById('alarm2');
var str_button = document.getElementById('str');
var set_button = document.getElementById('set');
var stim1 = 0;
var stim2 = 0;
var stim3 = 0;
var stim4 = 0;
var x = 5;
var t = 0;
var m,d,zz;
document.addEventListener("keydown",function(e){
  if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault();
});

document.addEventListener("keyup",function(){
  if(event.keyCode === 219) window.location.href = "index.html";
  if(event.keyCode === 221) window.location.href = "final.html";
  if(event.keyCode === 220) window.location.href = "biasa.html";
});

document.getElementById('sc1').addEventListener("keyup",function(){
  if(event.keyCode === 13){
    changeScore(1,parseInt(document.getElementById('sc1').value));
  }
});
document.getElementById('sc2').addEventListener("keyup",function(){
  if(event.keyCode === 13){
    changeScore(2,parseInt(document.getElementById('sc2').value));
  }
});
document.getElementById('sc3').addEventListener("keyup",function(){
  if(event.keyCode === 13){
    changeScore(3,parseInt(document.getElementById('sc3').value));
  }
});
document.getElementById('sc4').addEventListener("keyup",function(){
  if(event.keyCode === 13){
    changeScore(4,parseInt(document.getElementById('sc4').value));
  }
});

function changeScore(z,score){
  if(z===1){
    stim1 += score;
  }
  if(z===2){
    stim2 += score;
  }
  if(z===3){
    stim3 += score;
  }
  if(z===4){
    stim4 += score;
  }
  _tim1.innerHTML = stim1;
  _tim2.innerHTML = stim2;
  _tim3.innerHTML = stim3;
  _tim4.innerHTML = stim4;
}

function theTimer(){
  if(t==0){
    _alarm2.play();
    clearInterval(myTimer);
  }
  m = Math.floor(t/60);
  d = t%60;
  if(m<10) m = "0"+m;
  if(d<10) d = "0"+d;
  _timer.innerHTML = m + ":" + d;
  t--;
}
function setTimer(){
  zz = parseInt(document.getElementById('timm').value);
  t = zz;
  m = Math.floor(t/60);
  d = t%60;
  if(m<10) m = "0"+m;
  if(d<10) d = "0"+d;
  _timer.innerHTML = m + ":" + d;
}
function startTimer(){
  myTimer = setInterval(theTimer,1000);
  str_button.disabled = true;
  set_button.disabled = true;
}
function pauseTimer(){
  clearInterval(myTimer);
  str_button.disabled = false;
  set_button.disabled = false;
}
function resetTimer(){
  clearInterval(myTimer);
  t = zz;
  m = Math.floor(t/60);
  d = t%60;
  if(m<10) m = "0"+m;
  if(d<10) d = "0"+d;
  _timer.innerHTML = m + ":" + d;
  str_button.disabled = false;
  set_button.disabled = false;
}
