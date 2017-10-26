var domMenuBtn = document.getElementById("menu_icon");
var domMainMenu = document.querySelector(".menu_list");

function toggleMenu() {
  domMenuBtn.classList.toggle("menuexpanded");
  domMainMenu.classList.toggle("showmenu");
}
domMenuBtn.addEventListener("click", toggleMenu);
