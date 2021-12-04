const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

// add active class in smaller screens
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

// if a nav link is clicked close the hamburger menu
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
