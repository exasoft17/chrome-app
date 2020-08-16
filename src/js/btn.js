const btnFadeOutLeft = document.querySelector(".btn__fadeout-left"),
    btnFadeOutRight = document.querySelector(".btn__fadeout-right"),
    btnFadeInLeft = document.querySelector(".btn__fadein-left"),
    btnFadeInRight = document.querySelector(".btn__fadein-right"),
    contents = document.querySelector(".contents-clock");

function playFadeOutLeft() {
    contents.classList.remove("fadeout-left");
    contents.classList.add("fadeout-left");
}
function playFadeOutRight() {
    contents.classList.remove("fadeout-right");
    contents.classList.add("fadeout-right");
}
function playFadeInLeft() {
    contents.classList.remove("fadein-left");
    contents.classList.add("fadein-left");
}
function playFadeInRight() {
    contents.classList.remove("fadein-right");
    contents.classList.add("fadein-right");
}

function init() {
    btnFadeOutLeft.addEventListener("click", playFadeOutLeft);
    btnFadeOutRight.addEventListener("click", playFadeOutRight);
    btnFadeInLeft.addEventListener("click", playFadeInLeft);
    btnFadeInRight.addEventListener("click", playFadeInRight);
}

init();
