const daysDisplay = document.querySelector('#days');
const hoursDisplay = document.querySelector('#hours');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

const daysBoxFlip = document.querySelector('#box-days');
const hoursBoxFlip = document.querySelector('#box-hours');
const minutesBoxFlip = document.querySelector('#box-minutes');
const secondsBoxFlip = document.querySelector('#box-seconds');
const timeBoxCountdown = document.querySelector('.time-box-countdown');

//Selected date
let countDownDate = new Date("Jun 29, 2023 20:35:00").getTime();

let days = '';
let hours = '';
let minutes = '';
let seconds = '';

daysBoxFlip.classList.toggle("ok");
hoursBoxFlip.classList.toggle("ok");
minutesBoxFlip.classList.toggle("ok");
secondsBoxFlip.classList.toggle("ok");

//Function 
let interval = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let daysCont = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hoursCont = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesCont = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let secondsCont = Math.floor((distance % (1000 * 60)) / 1000);

  if(days != daysCont) {
    daysDisplay.innerHTML = daysCont;
    days = daysCont;

    daysBoxFlip.classList.toggle("flip");
    hoursBoxFlip.classList.toggle("ok");
    minutesBoxFlip.classList.toggle("ok");
    secondsBoxFlip.classList.toggle("ok");
  } 

  if(hours != hoursCont) {
    hoursDisplay.innerHTML = hoursCont;
    hours = hoursCont;

    daysBoxFlip.classList.toggle("ok");
    hoursBoxFlip.classList.toggle("flip");
    minutesBoxFlip.classList.toggle("ok");
    secondsBoxFlip.classList.toggle("ok");
  } 
  
  if(minutes != minutesCont) {
    minutesDisplay.innerHTML = minutesCont;
    minutes = minutesCont;

    daysBoxFlip.classList.toggle("ok");
    hoursBoxFlip.classList.toggle("ok");
    minutesBoxFlip.classList.toggle("flip");
    secondsBoxFlip.classList.toggle("ok");
  } 
  
  if(seconds != secondsCont) {
    secondsDisplay.innerHTML = secondsCont;
    seconds = secondsCont;
    
    daysBoxFlip.classList.toggle("ok");
    hoursBoxFlip.classList.toggle("ok");
    minutesBoxFlip.classList.toggle("ok");
    secondsBoxFlip.classList.toggle("flip");
  }

  if (distance < 0) {
    clearInterval(interval);

    alert("TIME EXPIRED");
  }
}, 1000);