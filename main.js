const menuBtn = document.querySelector("#btn");
const body = document.querySelector("body");

menuBtn.addEventListener("click", changeColor);

function changeColor(){
    body.style.backgroundColor = "#000";
}