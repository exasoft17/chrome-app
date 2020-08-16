const googleBtn = document.querySelector(".search-block__engine-google"),
    googleForm = document.querySelector(".search-block__form-google"),
    naverBtn = document.querySelector(".search-block__engine-naver"),
    naverForm = document.querySelector(".search-block__form-naver");

const ENGINE_LS = "Search_Engine_Type",
    SHOWING_OFF = "showing-off",
    GOOGLE = "google",
    NAVER = "naver",
    DEFAULT_ENGINE = "google";

function changeToNaver() {
    googleBtn.classList.add(SHOWING_OFF);
    googleForm.classList.add(SHOWING_OFF);
    naverBtn.classList.remove(SHOWING_OFF);
    naverForm.classList.remove(SHOWING_OFF);

    localStorage.setItem(ENGINE_LS, NAVER);
}

function changeToGoogle() {
    naverBtn.classList.add(SHOWING_OFF);
    naverForm.classList.add(SHOWING_OFF);
    googleBtn.classList.remove(SHOWING_OFF);
    googleForm.classList.remove(SHOWING_OFF);

    localStorage.setItem(ENGINE_LS, GOOGLE);
}

function loadLS() {
    let engine = localStorage.getItem(ENGINE_LS);
    if (engine === null) {
        engine = DEFAULT_ENGINE;
    }

    if (engine === GOOGLE) {
        changeToGoogle();
    } else {
        changeToNaver();
    }
}

function init() {
    loadLS();
    googleBtn.addEventListener("click", changeToNaver);
    naverBtn.addEventListener("click", changeToGoogle);
}

init();
