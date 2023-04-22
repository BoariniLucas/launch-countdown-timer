const daysDisplay = document.querySelector('#days');
const hoursDisplay = document.querySelector('#hours');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

let countDownDate = new Date("Jun 29, 2023 20:35:00").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysDisplay.innerHTML = days;
  hoursDisplay.innerHTML =hours;
  minutesDisplay.innerHTML = minutes;
  secondsDisplay.innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);

    alert("EXPIRED");
  }
}, 1000);