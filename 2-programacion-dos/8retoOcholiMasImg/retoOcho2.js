'use strict'
const firstDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_1205.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/malamute/n02110063_642.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/chihuahua/n02085620_3409.jpg';
const thirdDogName = 'Lana';

document.querySelector('.dina').innerHTML =`<h1>${firstDogName}</h1><img src="${firstDogImage}" alt="">`;
document.querySelector('.luna').innerHTML =`<h1>${secondDogName}</h1><img src="${secondDogImage}" alt="">`;
document.querySelector('.lana').innerHTML =`<h1>${thirdDogName}</h1><img src="${thirdDogImage}" alt="">`;