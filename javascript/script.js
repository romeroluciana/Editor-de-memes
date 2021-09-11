const body = document.querySelector(".body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");
const colorText = document.querySelector(".color-text");
const changeMode = () =>{
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
}
darkBtn.addEventListener("click",changeMode);
lightBtn.addEventListener("click", changeMode);