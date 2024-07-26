// onloading animation 

const main_info = document.querySelector(".main_info");
const info_head = document.querySelector(".info_head");
const landing_btn = document.querySelector(".landing_button_container");


window.onload = function() {
    setTimeout(()=>{
        main_info.classList.add('landing_main_anim');
        info_head.classList.add('landing_head_info_anim');
        landing_btn.classList.add('landing_head_info_anim');
    },500)
};



// about page animation

const aboutbox = document.querySelector(".About_content_box");

const aboutObserver = new IntersectionObserver(
  (entries,aboutObserver)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
    entry.target.classList.add("AboutBox_anim");
}
else aboutbox.classList.remove("AboutBox_anim");
});
},{threshold:0.2}
);
aboutObserver.observe(aboutbox);