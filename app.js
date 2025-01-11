const clockHours = document.querySelector(".clock-hours");
const clockMinutes = document.querySelector(".clock-minutes");
const clocMeridiem = document.querySelector(".clock-meridiem");
const clockDay = document.querySelector(".clock-day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const initialDate = new Date();
timepiece(initialDate); // set the current time in the HTML elements of the digital clock
const delay = (60-(initialDate).getSeconds())*1000; // calculate the delay in milliseconds before running the startClock() function, which refreshes the time every minute

function startClock () { // start the clock at the current time and refresh it every 60 seconds
    timepiece(new Date());
    setTimeout(startClock, 60000);
}

function timepiece(currentTime) { // Check the current day of the week, hours, minutes, and meridiem and record them in the corresponding HTML elements
    let wd = weekDays[currentTime.getDay()];
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    h = checkMeridiem(h);
    clocMeridiem.innerText = h[1];
    h = checkTime(h[0]);
    m = checkTime(m);
    clockHours.innerText = h;
    clockMinutes.innerText = m;
    clockDay.innerText = wd;
}

function checkTime(x) { // add a zero before single-digit numbers
    if (x < 10) {x = `0${x}`}; 
    return x;
}

function checkMeridiem(x, y = "AM") { // determine whether it is before or after noon, and return an array [hours, 'meridiem']
    if (x > 12) {x = x-12; y = "PM"}; 
    return [x, y];
}

window.addEventListener('load', () => setTimeout(startClock, delay)); // after the page loads, wait for a delay, then run the startClock() function