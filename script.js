
const menue_btn = document.getElementById("toggle_nav_button");
const nav_container = document.querySelector(".nav_navigation_container");

const HandleNav_visible = ()=>{
    nav_container.classList.toggle("navigation_mobile");
}
menue_btn.addEventListener("click",HandleNav_visible)
