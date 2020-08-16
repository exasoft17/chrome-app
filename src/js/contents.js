// declared on "menu.js"
// const clockBtn = document.querySelector(".menu-block__clock"),
//     todoBtn = document.querySelector(".menu-block__todo"),
//     weatherBtn = document.querySelector(".menu-block__weather");

const clockContent = document.querySelector(".contents-clock"),
    todoContent = document.querySelector(".contents-todo"),
    weatherContent = document.querySelector(".contents-weather");

const contentList = [clockContent, todoContent, weatherContent];

const FADE_IN = "fadein-point",
    FADE_OUT = "fadeout-point";

let previousContent;

function changeContent() {
    const contentID_string = localStorage.getItem(MENU_LS);
    const contentID = parseInt(contentID_string, 10);

    showOffAll();
    contentList[contentID].classList.remove(SHOWING_OFF);
    contentList[contentID].classList.add(FADE_IN);
}

function showOffAll() {
    clockContent.classList.remove(SHOWING_OFF);
    clockContent.classList.remove(FADE_IN);
    todoContent.classList.remove(SHOWING_OFF);
    todoContent.classList.remove(FADE_IN);
    weatherContent.classList.remove(SHOWING_OFF);
    weatherContent.classList.remove(FADE_IN);
    clockContent.classList.add(SHOWING_OFF);
    todoContent.classList.add(SHOWING_OFF);
    weatherContent.classList.add(SHOWING_OFF);
}

function loadContent() {
    let loadedContent = localStorage.getItem(MENU_LS);
    if (loadedContent === null) {
        loadedContent = DEFAULT_MENU;
    }
    showOffAll();
    contentList[parseInt(loadedContent, 10)].classList.remove(SHOWING_OFF);
    previousContent = parseInt(loadedContent, 10);
}

function init() {
    loadContent();
    clockBtn.addEventListener("click", changeContent);
    todoBtn.addEventListener("click", changeContent);
    weatherBtn.addEventListener("click", changeContent);
}

init();
