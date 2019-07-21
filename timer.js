var _timer = document.getElementById('_timer');
var _bot = document.getElementById('bottom');
var _alarm1 = document.getElementById('alarm1');
var _alarm2 = document.getElementById('alarm2');

var p = 0;
var t= time;
var m;
var d;
var w = 0;

function theTimer(){
  if(t==0){
    w += 20;
    _bot.style.width = w + "%";
    if(w<100){
      _alarm1.play();
      t=time;
    }
  }
  if(w==100){
    _alarm2.play();
    _bot.innnerHTML = "Finished";
    clearInterval(myTimer);
    p=0;
  }

  m = Math.floor(t/60);
  d = t%60;
  if(m<10) m = "0"+m;
  if(d<10) d = "0"+d;
  _timer.innerHTML = m + ":" + d;
  t--;

}

function resetTimer(){
  clearInterval(myTimer);
  z = "Done";
  _timer.innerHTML = z;
}

document.addEventListener("keyup",function(){
  if(event.keyCode === 83 && p==0){
    myTimer = setInterval(theTimer,1000);
    _bot.innerHTML = "started";
    p=1;
  }

  if(event.keyCode === 80){
    clearInterval(myTimer);
    _bot.innerHTML = "paused";
    p=0;
  }

  if(event.keyCode === 82){
    clearInterval(myTimer);
    t = time;
    w = 0;
    m = Math.floor(t/60);
    d = t%60;
    if(m<10) m = "0"+m;
    if(d<10) d = "0"+d;
    _timer.innerHTML = m + ":" + d;
    _bot.style.width = w + "%";
    _bot.innerHTML = "Resetted";
    p=0;
  }

  if(event.keyCode === 78){
    _alarm1.play();
  }
  if(event.keyCode === 77){
    _alarm2.play();
  }
  if(event.keyCode === 219){
    window.location.href = "index.html";
  }
  if(event.keyCode === 221){
    window.location.href = "final.html";
  }
  if(event.keyCode === 220){
    window.location.href = "biasa.html";
  }
});
