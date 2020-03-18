'use strict'
const avatarUser = 'http://placehold.it/300x300';
let imgUser = 'hola';
const img = document.querySelector('.iuser');

if (imgUser === ''){
    img.src = avatarUser;
} else {
    img.src = 'https://t1.uc.ltmcdn.com/images/7/2/4/img_como_hacer_fotos_de_alta_resolucion_en_300_dpi_1427_600_square.jpg';
}