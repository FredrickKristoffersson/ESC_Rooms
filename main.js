const mobileMenu = document.querySelector(".header_menuBtn");
const closeMenu = document.querySelector(".closeBtn");

mobileMenu.addEventListener("click", () => {
  console.log("hej det fungerar");
  document.querySelector(".mobileMenu").classList.add("mobileMenu_open");
  document.querySelector(".mobileMenu_ul").classList.add("mobileMenu_ul_open");
});

closeMenu.addEventListener("click", () => {
  document.querySelector(".mobileMenu").classList.remove("mobileMenu_open");
  document.querySelector(".mobileMenu_ul").classList.remove("mobileMenu_ul_open");
})

