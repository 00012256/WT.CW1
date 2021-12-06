const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

// add active-link class to current page
const activePage = window.location.pathname;
navLink.forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active-link');
    console.log(link);
  }
})

// add active class in smaller screens
hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// if a nav link or hamburger menu is clicked close the hamburger menu
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// back to top button
window.addEventListener('scroll', function() {
  var scroll = document.querySelector('.scrollTop')
  scroll.classList.toggle("active-top", window.scrollY > 500)
})

document.getElementById('scrollTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});