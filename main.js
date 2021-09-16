/*Modo claro/oscuro*/
const body = document.querySelector('body')
const botonToggle = document.getElementById('toggle-mode-button')
const iconToggle = document.getElementById('icon-toggle-mode')
const textToggle = document.getElementById('text-toggle')

const changeMode = () => {
    // se hace toggle de todas las clases que necesitamos cambiar
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
    iconToggle.classList.toggle('far')
    iconToggle.classList.toggle('fas')
    //chequeamos con modeStatus si el estado es dark o light. Si hay un dark-mode, 
    // esta en modo dark, de lo contrario es light
    const modeStatus = document.getElementsByClassName('dark-mode');
    // Si el modo es DARK vamos a pasar a modo claro
    if (modeStatus.length > 0) { // AQUI NOS FIJAMOS CUANTOS ELEMENTOS se obtuvieron con getELementsByClassName
       console.log("ESTA EN DARK MODE");
       textToggle.textContent = "Modo claro"
    // Si el modo es LIGH vamos a pasar a modo oscuro 
    } else {
        console.log("Esta en light mode")
        textToggle.textContent = "Modo oscuro"
    }
    // OPCIONAL DESCOMENTAMOS ESTA LINEA Y TENEMOS UN SHORTCUT PARA EL IF 
    // textToggle.textContent = modeStatus.length > 0 ? "Modo Claro" : "Modo Oscuro"
}
botonToggle.addEventListener('click', changeMode)