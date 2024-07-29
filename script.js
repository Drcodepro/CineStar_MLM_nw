
const menue_btn = document.querySelector(".toggle_nav_button");
const nav_container = document.querySelector(".nav_navigation_container");

const HandleNav_visible = ()=>{
    console.log("dkjfno")
    nav_container.classList.toggle("navigation_mobile");
}
menue_btn.addEventListener("click",HandleNav_visible)
