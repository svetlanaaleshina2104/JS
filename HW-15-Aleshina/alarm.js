// let input = document.querySelector('time');
const buttonInst = document.querySelector('.inst');
/* const buttonDis = document.querySelector('.disable'); */

let audio = new Audio ('alarm.mp3');
let input = '';
let alarmTime = null;
let now = new Date();


function setTime() {
    now = new Date();
    input = document.getElementById('time').value;
    let time = new Date(now.toDateString() + ' ' + input);
  
    
    if (time < now) {
      alert ('Время установлено не верно!')
    } else {
      alarmTime = time;
      alert('Будильник установлен')
    }

}    
  
  setInterval( () => {
    now = new Date();
    
    let diffTime = alarmTime - now;
    if (diffTime < 0 && alarmTime != null ) {
      audio.play();
    };
  
  }, 1000 );



 function stopAlarm () {
  alarmTime = null;
  audio.pause();
 }