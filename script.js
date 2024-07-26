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
const keyPoint = document.querySelectorAll(".key_point");
const keyPoster = document.querySelector(".KeyPoint_poster");

const howPoint = document.querySelectorAll(".PointInfo_box");
const howPoster = document.querySelector(".howWork_poster");



const elementObserve = new IntersectionObserver(
  (entries,elementObserve)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
    

    if(entry.target===aboutbox){
    entry.target.classList.add("AboutBox_anim");
    }

    if([...keyPoint].includes(entry.target)) {
        entry.target.classList.add("key_point_animation");
    }

    if(entry.target===keyPoster){
        entry.target.classList.add("KeyPoint_poster_animation");
        }

    if([...howPoint].includes(entry.target)) {
        entry.target.classList.add("key_point_animation");
    }

    if(entry.target===howPoster){
        entry.target.classList.add("KeyPoint_poster_animation");
    }
}
// else  {
//     if(entry.target===aboutbox){
//         entry.target.classList.remove("AboutBox_anim");
//         }
//         if([...keyPoint].includes(entry.target)) {
//             entry.target.classList.remove("key_point_animation");
//         }
//         if(entry.target==keyPoster){
//             entry.target.classList.remove("KeyPoint_poster_animation");
//             }
// }
});
},{threshold:0.1}
);

elementObserve.observe(aboutbox);
elementObserve.observe(keyPoster);
elementObserve.observe(howPoster);


keyPoint.forEach((keyPoint) => {
    elementObserve.observe(keyPoint);
});

howPoint.forEach((howPoint) => {
    elementObserve.observe(howPoint);
});