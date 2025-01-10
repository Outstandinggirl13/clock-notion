

const clockHours = document.querySelector(".clock-hours");
const clockMinutes = document.querySelector(".clock-minutes");
const clocMeridiem = document.querySelector(".clock-meridiem");
const clockDay = document.querySelector(".clock-day");

const today = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function timeTrack () {
    let wd = weekDays[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let apm = h > 11 ? "PM" : "AM";
    h = checkTime (h);
    m = checkTime(m);
    clockHours.innerText = h;
    clockMinutes.innerText = m;
    clocMeridiem.innerText = apm;
    clockDay.innerText = wd;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = `0${i}`};  // add zero in front of numbers < 10
    return i;
}

window.addEventListener('load', timeTrack());
