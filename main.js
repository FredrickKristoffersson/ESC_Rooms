const menuBox = document.querySelector("#menuBox");
const menuIcon = document.querySelector("#btn");

menuIcon.addEventListener("click", viewMenu);

  function viewMenu(){
    menuBox.classList.toggle = "menuBox_open";
  }

/* menuIcon.onclick = function(){
  menuBox.classList.toggle = "menuBox_open";
  // menuBox.classList.add("open");
} */

/* function toggleMenu()
{
  menuBox.classList.toggle("menuBox.open");
} */