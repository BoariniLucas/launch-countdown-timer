const daysDisplay = document.querySelector('#days');
const hoursDisplay = document.querySelector('#hours');
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

const daysBoxFlip = document.querySelector('#box-days');
const hoursBoxFlip = document.querySelector('#box-hours');
const minutesBoxFlip = document.querySelector('#box-minutes');
const secondsBoxFlip = document.querySelector('#box-seconds');
const timeBoxCountdown = document.querySelector('.time-box-countdown');
const dateTime = document.querySelector('#date-time');
const launchDateForm = document.querySelector('.launch-date');

const btnOpenDateForm = document.querySelector('#btn-open-date-form');
const btnClose = document.querySelector('#btn-close');
const btnClearForm = document.querySelector('#btn-clear-form');
const btnSelectDate = document.querySelector('#btn-select-date');

let countDownDate = new Date("Jun 29, 2023 20:35:00").getTime();
let selectData = countDownDate;
let days = '';
let hours = '';
let minutes = '';
let seconds = '';

daysBoxFlip.classList.toggle("ok");
hoursBoxFlip.classList.toggle("ok");
minutesBoxFlip.classList.toggle("ok");
secondsBoxFlip.classList.toggle("ok");

countDownFunction();


/*     ----Events----     */
/*        --------        */
btnOpenDateForm.addEventListener('click', () => {
  launchDateForm.style.visibility = "visible";
});

btnClose.addEventListener('click', () => {
  launchDateForm.style.visibility = "hidden";
});

btnClearForm.addEventListener('click', () => {
  clearForm();
});

btnSelectDate.addEventListener('click', () => {

  selectData = 0;
  countDownDate = 0;

  selectData = dateTime.value; 
  countDownDate = new Date(selectData).getTime();
  console.log(countDownDate);

  launchDateForm.style.visibility = "hidden";
  
  countDownFunction();
});



/*     ----Functions----     */
/*         ---------         */
function countDownFunction() {
  let interval = setInterval(function() {

    let distance;

    if (selectData == "" || selectData == 0) {

      alert("EMPTY DATE");
      clearForm();
      clearInterval(interval);
      launchDateForm.style.visibility = "hidden";

      clearDisplay();          

    } else {

      let now = new Date().getTime();
    
      distance = countDownDate - now;
    
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
    }   
    
    if (distance < 0) {
        clearInterval(interval);

        clearDisplay();
    
        alert("TIME EXPIRED");
      }
  }, 1000);
}

function clearForm() {
  dateTime.value = "";
}

function clearDisplay() {
  daysDisplay.innerHTML = "0";
  hoursDisplay.innerHTML = "0";
  minutesDisplay.innerHTML = "0";
  secondsDisplay.innerHTML = "0"; 
}