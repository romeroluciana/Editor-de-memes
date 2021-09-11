/*Modo claro/oscuro*/
const cambiarModoClaro = () =>{
    document.body.classList.remove('dark-mode')
    document.body.classList.add('light-mode')
}
const cambiarModoOscuro = () =>{
    document.body.classList.remove('light-mode')
    document.body.classList.add('dark-mode')
}
const cambiarTema = () =>{
    let botonOscuro = document.getElementById('dark-mode-button')
    botonOscuro.addEventListener('click', cambiarModoClaro)
    let botonClaro = document.getElementById('light-mode-button')
    botonClaro.addEventListener('click', cambiarModoOscuro)
}