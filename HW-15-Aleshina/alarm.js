// let input = document.querySelector('time');
const buttonInst = document.querySelector('.inst');
/* const buttonDis = document.querySelector('.disable'); */

let audio = new Audio ('alarm.mp3');
let input = '';
let alarmTime = null;
let now = new Date();

buttonInst.addEventListener('click', () => {alert('Будильник установлен')}); // обработчик события-нажатия на кнопку

function setTime() {
    input = document.getElementById('time').value;
    alarmTime = new Date(now.toDateString() + ' ' + input);
    
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