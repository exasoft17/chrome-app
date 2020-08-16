const clockTimeApm = document.querySelector(".contents-clock__time__apm"),
    clockTimeHm = document.querySelector(".contents-clock__time__hm"),
    clockTimeSec = document.querySelector(".contents-clock__time__sec"),
    clockDate = document.querySelector(".contents-clock__date__span");

const weeks = ["일", "월", "화", "수", "목", "금", "토"];

function getTimeAndDate() {
    const date = new Date();
    const hours = date.getHours();
    const apm = `${hours < 13 ? "AM" : "PM"}`;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTimeApm.innerText = apm;
    clockTimeHm.innerText = `${hours > 12 ? `${hours - 12}` : hours}:` + `${minutes < 10 ? `0${minutes}` : minutes}`;
    clockTimeSec.innerText = `${seconds < 10 ? `0${seconds}` : seconds}`;

    const year = date.getFullYear();
    const mon = date.getMonth() + 1;
    const day = date.getDate();
    const week = weeks[date.getDay()];

    clockDate.innerText = `${year}년 ${mon}월 ${day}일 ${week}요일`;
}

function showClock() {
    getTimeAndDate();
    setInterval(getTimeAndDate, 1000);
}

function init() {
    showClock();
}

init();
