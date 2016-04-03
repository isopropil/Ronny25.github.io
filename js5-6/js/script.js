var wrapper = document.createElement('div');
wrapper.className = "wrapper";
document.body.insertBefore(wrapper, document.body.firstChild);

var timer = document.createElement('div');
timer.id = "timerAll";
wrapper.insertBefore(timer, wrapper.firstChild);

window.onload = function() {
  addElements();
}

var hoursText = 0;
var minutesText = 0;
var secondsText = 0;
var milisecondsText = 0;

var timerId;

function addElements() {

  var hours = document.createElement('p');
  hours.id = "hours";
  timer.insertBefore(hours, timer.firstChild).innerHTML = 0 + ' : ';

  var minutes = document.createElement('p');
  minutes.id = "minutes";
  timer.insertBefore(minutes, timer.children[1]).innerHTML = 0 + ' : ';

  var seconds = document.createElement('p');
  seconds.id = "seconds";
  timer.insertBefore(seconds, timer.children[2]).innerHTML = 0 + ' : ';

  var miliseconds = document.createElement('p');
  miliseconds.id = "miliseconds";
  timer.insertBefore(miliseconds, timer.children[3]).innerHTML = 0;

}


var buttonStart = document.createElement('input');
buttonStart.type = "button";
buttonStart.id = "start";
buttonStart.value = "Старт";

timerAll.appendChild(buttonStart);

buttonStart.addEventListener('click', function () {
  if (buttonStart.value == 'Старт' || buttonStart.value == 'Продолжить') {
    countUP();

  }else if (buttonStart.value == 'Пауза') {
    pausing();

  }

});

var buttonReset = document.createElement('input');
buttonReset.type = "button";
buttonReset.id = "reset";
buttonReset.value = "Сброс";

buttonReset.addEventListener('click', reseting);
timerAll.appendChild(buttonReset);


function countUP() {
  milisecondsText++;

  if (milisecondsText >= 1000) {
    milisecondsText = 0;
    secondsText++;
  }
  
  minutesText = Math.floor(secondsText / 60);
  hoursText = Math.floor(minutesText / 60);

  document.getElementById('miliseconds'). innerHTML = milisecondsText;
  document.getElementById('seconds'). innerHTML = secondsText + ' : ';
  document.getElementById('minutes'). innerHTML = minutesText + ' : ';
  document.getElementById('hours'). innerHTML = hoursText + ' : ';

  timerId = setTimeout(countUP, 1);

  buttonStart.value = 'Пауза';
}

function pausing() {
  clearTimeout(timerId);

  buttonStart.value = 'Продолжить';
}

function reseting() {
  clearTimeout(timerId);

  hoursText = 0;
  minutesText = 0;
  secondsText = 0;
  milisecondsText = 0;

  document.getElementById('miliseconds').innerHTML = 0;
  document.getElementById('seconds').innerHTML = 0 + ' : ';
  document.getElementById('minutes').innerHTML = 0 + ' : ';
  document.getElementById('hours').innerHTML = 0 + ' : ';

  buttonStart.value = 'Старт';
}
