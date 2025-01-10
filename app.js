const clockHours = document.querySelector(".clock-hours");
const clockMinutes = document.querySelector(".clock-minutes");
const clocMeridiem = document.querySelector(".clock-meridiem");
const clockSeconds = document.querySelector(".clock-seconds");
const clockDay = document.querySelector(".clock-day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function startClock () {
    const today = new Date();
    let wd = weekDays[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkMeridiem(h);
    clocMeridiem.innerText = h[1];
    h = checkTime(h[0]);
    m = checkTime(m);
    s = checkTime(s);
    clockHours.innerText = h;
    clockMinutes.innerText = m;
    clockSeconds.innerText = s;
    clockDay.innerText = wd;
    setTimeout(startClock, 1000);
}

function checkTime(x) {
    if (x < 10) {x = `0${x}`};  // add zero in front of numbers < 10
    return x;
}

function checkMeridiem(x, y = "AM") {
    if (x > 11) {x = x-12; y = "PM"};
    return [x, y];
}

window.addEventListener('load', startClock());
