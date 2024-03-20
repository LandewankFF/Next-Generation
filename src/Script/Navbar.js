// create Navbar sticky
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Create resnposive menu
// const menuOpen = document.querySelector(".menu-open");
// const menuClose = document.querySelector(".close-menu");
// const menuList = document.getElementById("menu-list");

