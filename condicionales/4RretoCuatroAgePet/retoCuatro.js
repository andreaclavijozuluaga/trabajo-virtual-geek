'use strict'

let ageDog = "";
ageDog = prompt('Ingrese la edad humana de su perro');

if( ageDog === 1){
    console.log('La edad de su perro es: 15 Años ');
}else if( ageDog === 2 ){
    console.log('La edad de su perro es: 24 Años');
}else if( ageDog === 3){
    console.log('La edad de su perro es: 29 Años');
}else if( ageDog < 0){
    console.log('ingrese un valor valido');
}else if(ageDog >= 4){
    console.log('Su perro tiene mas que 29 años');
}