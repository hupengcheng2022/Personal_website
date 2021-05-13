var time=new Date();
var years=time.getFullYear();
var month=time.getMonth()+1;
var date=time.getDate();
var hour=time.getHours();
var second=time.getSeconds();
var minu=time.getMinutes();
switch (new Date().getDay()) {
    case 0:
        day = "星期天";
        break;
    case 1:
        day = "星期一";
        break;
    case 2:
        day = "星期二";
        break;
    case 3:
        day = "星期三";
        break;
    case 4:
        day = "星期四";
        break;
    case 5:
        day = "星期五";
        break;
    case 6:
        day = "星期六";
}
document.getElementById("year").innerText=years+"年"+month+"月"+date+"日";
document.getElementById("month").innerText=hour+":"+minu+":"+second;
document.getElementById("week").innerText=day;
/*

var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
*/

