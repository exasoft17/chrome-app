const clockBtn = document.querySelector(".menu-block__clock"),
    todoBtn = document.querySelector(".menu-block__todo"),
    weatherBtn = document.querySelector(".menu-block__weather");

const menuList = [clockBtn, todoBtn, weatherBtn];

const MENU_LS = "selected_menu",
    DEFAULT_MENU = "0",
    CLOCK = "0",
    TODO = "1",
    WEATHER = "2",
    SELECT = "selected-menu";

function removeSelect() {
    clockBtn.classList.remove(SELECT);
    todoBtn.classList.remove(SELECT);
    weatherBtn.classList.remove(SELECT);
}

function selectMenu(event) {
    const menuID_string = event.target.id;
    localStorage.setItem(MENU_LS, menuID_string);
    const menuID = parseInt(menuID_string, 10);
    removeSelect();
    menuList[menuID].classList.add(SELECT);
}

function loadLS() {
    let currentMenu = localStorage.getItem(MENU_LS);
    if (currentMenu === null) {
        currentMenu = DEFAULT_MENU;
    }

    removeSelect();
    menuList[parseInt(currentMenu, 10)].classList.add(SELECT);
}

function init() {
    loadLS();
    clockBtn.addEventListener("click", selectMenu);
    todoBtn.addEventListener("click", selectMenu);
    weatherBtn.addEventListener("click", selectMenu);
}

init();
