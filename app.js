

const clockHours = document.querySelector(".clock-hours");
const clockMinutes = document.querySelector(".clock-minutes");
const clocMeridiem = document.querySelector(".clock-meridiem");
const clockSeconds = document.querySelector(".clock-seconds");
const clockDay = document.querySelector(".clock-day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function startTime () {
    const today = new Date();
    let wd = weekDays[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let apm = h > 11 ? "PM" : "AM";
    h = checkTime (h);
    m = checkTime(m);
    s = checkTime(s);
    clockHours.innerText = h;
    clockMinutes.innerText = m;
    clocMeridiem.innerText = apm;
    clockSeconds.innerText = s;
    clockDay.innerText = wd;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = `0${i}`};  // add zero in front of numbers < 10
    return i;
}

window.addEventListener('load', startTime());
