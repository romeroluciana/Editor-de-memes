
/////////////////
//// HEADER /////
/////////////////

// MODO CLARO-OSCURO
const body = document.querySelector('body')
const botonToggle = document.getElementById('toggle-mode-button')
const iconToggle = document.getElementById('icon-toggle-mode')
const textToggle = document.getElementById('text-toggle')
const imageToggle = document.getElementById('toggle-image-button')
const textAsideToggle = document.getElementById('toggle-texto-button')

const changeMode = () => {
    body.classList.toggle('dark-mode')
    body.classList.toggle('light-mode')
    iconToggle.classList.toggle('far')
    iconToggle.classList.toggle('fas')
    const modeStatus = document.getElementsByClassName('dark-mode');
    textToggle.textContent = modeStatus.length > 0 ? "Modo Claro" : "Modo Oscuro"
}
botonToggle.addEventListener('click', changeMode)

const chageToImage = () => {
    let sectionImagen = document.getElementById('section-imagen')
    sectionImagen.classList.remove('oculto')

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.add('oculto')
}

imageToggle.addEventListener('click', chageToImage)

const changeToText = () => {

    let sectionTexto = document.getElementById('section-texto')
    sectionTexto.classList.remove('oculto')

    let sectionImagen = document.getElementById('section-image')
    sectionImagen.classList.add('oculto')
}
textAsideToggle.addEventListener('click', changeToText)



/////////////////
// ASIDE TEXTO //
/////////////////


// TOP TEXT Y BOTTOM TEXT
// CAMBIO DE FUENTE

const $ = (id) => document.getElementById(id)

let cambiarText = () => {
    $("toptext").textContent = $("asidetoptext").value
    $("bottomtext").textContent = $("asidebottomtext").value

}

let cambiarFont = () => {
    let font = $("font-list").value
    $("toptext").style.fontFamily = font
    $("bottomtext").style.fontFamily = font

}


const botoncheck = () => {
    if ($('checksuperior').checked) {
        $('text-container').classList.add('none')
    } else {
        $('text-container').classList.remove('none')
    }

    if ($('checkinferior').checked) {
        $('text-containerdos').classList.add('none')
    } else {
        $('text-containerdos').classList.remove('none')
    }
}

let comenzarText = () => {
    $("asidetoptext").addEventListener("input", cambiarText)
    $("asidebottomtext").addEventListener("input", cambiarText)
    $("font-list").addEventListener("change", cambiarFont)
    $("checksuperior").addEventListener("click", botoncheck)
    $("checkinferior").addEventListener("click", botoncheck)
}

//CAMBIO COLORES

let actualizarColores = () => {
    let colorf = $("color-input-f").value.toUpperCase()
    $("text-container").style.backgroundColor = colorf
    $("text-containerdos").style.backgroundColor = colorf
    $("circle-f").style.backgroundColor = colorf
    $("span-f").textContent = colorf

    let colortxt = $("color-input-txt").value.toUpperCase()
    $("toptext").style.color = colortxt
    $("bottomtext").style.color = colortxt
    $("circle-c").style.backgroundColor = colortxt
    $("span-txt").textContent = colortxt

    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor = colorimg
    $("circleimg").style.backgroundColor = colorimg
    $("circletext").textContent = colorimg

}

let colorImg = () => {
    let colorimg = $("color-input-img").value.toUpperCase()
    $("imagen").style.backgroundColor = colorimg
    $("circleimg").style.backgroundColor = colorimg
    $("circletext").textContent = colorimg
}

let inicializarColores = () => {
    $("color-input-f").addEventListener("input", actualizarColores)
    $("color-input-txt").addEventListener("input", actualizarColores)
}
let inicializarImg = () => {
    $("color-input-img").addEventListener("input", colorImg)
}


// Cambio tamaño de fuente



//////////////////
// ASIDE IMAGEN //
//////////////////

//INPUT IMAGEN POR URL

let imageChange = () => {
    let urlImagen = document.getElementById("url_input");
    let imagen = document.getElementById("imagen");
    imagen.src = urlImagen.value;
}

let iniciarImage = () => {
    $('url_input').addEventListener('input', imageChange);
}



/////////////////////////
/// INICIALIZACIONES ///
///////////////////////

const inicializar = () => {
    comenzarText()
    inicializarColores()
    iniciarImage()
    inicializarImg()
}
window.onload = inicializar

