const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar ");
const navlist = document.querySelector(".nav-list");
const rightNav = document.querySelector(".rightNav");


hamburger.addEventListener("click", () =>{
    rightNav.classList.toggle("v-class-resp")
    navlist.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-nav-resp")
})
