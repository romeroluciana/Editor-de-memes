/*Modo claro/oscuro*/
const body = document.querySelector('body')
const botonOscuro = document.getElementById('dark-mode-button')
const botonClaro = document.getElementById('light-mode-button')

const changeMode = () =>{
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
}
botonOscuro.addEventListener('click', changeMode)
botonClaro.addEventListener('click', changeMode)