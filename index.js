let nav = document.querySelector(".navbar");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach((e) => {
  e.onclick = () => {
    navCollapse.classList.remove("show");
  };
});
