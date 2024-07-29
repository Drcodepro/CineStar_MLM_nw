
const menue_btn = document.getElementById("toggle_nav_button");
const nav_container = document.querySelector(".nav_navigation_container");
const navigation = document.querySelector("#navigation_text");

const HandleNav_visible = ()=>{
    console.log("clicked");
    nav_container.classList.toggle("navigation_mobile");
}
menue_btn.addEventListener("click",HandleNav_visible);
navigation.addEventListener("click",HandleNav_visible);


// ppt open on click btn

const ppt_btn = document.querySelector("#PPT_btn");

ppt_btn.addEventListener("click",()=>{
    window.open("./Cine_Star_ppt .pdf");
})