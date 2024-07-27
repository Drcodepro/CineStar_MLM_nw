

const menue_btn = document.querySelector(".menue_btn");
const nav_container = document.querySelector(".nav_navigation_container");

menue_btn.addEventListener("click",()=>{
    HandleNav_visible();
})

const HandleNav_visible = ()=>{
    if (nav_container.classList.contains("navIsHidden")) {
        nav_container.classList.remove("navIsHidden");
    }
    else{
        nav_container.classList.add("navIsHidden");
    }
}