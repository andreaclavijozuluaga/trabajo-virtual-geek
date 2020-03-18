let edad = '';
const mesesA = 12; 
let semanasA = mesesA * 4; 
let diasA = semanasA * 7;
let horasA = diasA * 24;
let totalHorasVividas = '';

edad = parseInt(prompt('ingrese su edad en numeros'));

totalHorasVividas = edad * horasA;

document.querySelector('p').innerHTML=(`El total de horas que usted ha vivido es: ${totalHorasVividas}`)

