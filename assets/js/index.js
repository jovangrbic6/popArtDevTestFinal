const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header");
const menu = document.querySelector(".header__menu");
const social = document.querySelector(".social");
const html = document.querySelector("html");

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
  social.classList.toggle("active");
  html.classList.toggle("active");
  console.log(html.classList);
});
