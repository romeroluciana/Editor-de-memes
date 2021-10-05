const brightnessRange = document.getElementById('brightness');
const opacityRange = document.getElementById('opacity');
const contrastRange = document.getElementById('contrast');
const blurRange = document.getElementById('blur');
const grayscaleRange = document.getElementById('grayscale');
const sepiaRange = document.getElementById('sepia');
const hueRange = document.getElementById('hue');
const saturationRange = document.getElementById('saturation');
const invertRange = document.getElementById('invert');
const memeImg = document.querySelector('.meme-img');
const btnRestablecer = document.querySelector(".refresh-btn");
const colorInput = document.querySelector(".color-input");
const selectBlend = document.querySelector(".blend-list");
const arrayIniciales = ['1', '1', '100', '0', '0', '0', '0', '100', '0'];
const unidades = ['', '', '%', 'px', '%', '%', 'deg', '%', ''];
const txtFiltro = ['brightness', 'opacity', 'contrast', 'blur', 'grayscale', 'sepia', 'hue-rotate', 'saturate', 'invert'];
const filtros = [brightnessRange, opacityRange, contrastRange, blurRange, grayscaleRange, sepiaRange, hueRange, saturationRange, invertRange];

const changeBlendMode = () => {
    let color = colorInput.value;
    memeImg.style.backgroundColor = color;
    memeImg.style.backgroundBlendMode = selectBlend.value;
}

const change = () => {
    memeImg.style.filter = '';
    for (let i = 0; i < filtros.length; i++) {
        memeImg.style.filter += `${txtFiltro[i]}(${filtros[i].value}${unidades[i]})`;
    }
}

const valoresIniciales = () => {
    for (let i = 0; i < filtros.length; i++) {
        filtros[i].value = arrayIniciales[i];
        change();
    }
}

for (let j = 0; j < filtros.length; j++) {
    filtros[j].addEventListener('input', () => {
        change();
    });
}
btnRestablecer.addEventListener('click', () => {
    valoresIniciales();
    change();
});