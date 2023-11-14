const mobileMenu = document.querySelector(".header_menuBtn");

mobileMenu.addEventListener("click", () => {
  console.log("hej det fungerar");
  document.querySelector(".mobileMenu").classList.add("mobileMenu_open");
  document.querySelector(".mobileMenu_ul").classList.add("mobileMenu_ul_open");
});