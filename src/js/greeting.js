const greetingForm = document.querySelector(".greeting__form"),
    greetingInput = document.querySelector(".greeting__input"),
    greetingSpan = document.querySelector(".greeting__span");

const USER_LS = "currentUser";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetingInput.value;
    showGreeting(currentValue);
    saveName(currentValue);
}

function showGreeting(text) {
    greetingForm.classList.add(SHOWING_OFF);
    greetingSpan.classList.remove(SHOWING_OFF);
    greetingSpan.innerText = `Welcome,  ${text}.  Have a Nice Day !`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser !== null) {
        showGreeting(currentUser);
    }
}

function init() {
    loadName();
    greetingForm.addEventListener("submit", handleSubmit);
}

init();
