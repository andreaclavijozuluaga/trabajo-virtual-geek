let userName = "John"; //camelcase
let lastName = "Carter";

username = 'Pepe';// para cambiar O RESIGNAR VALOR el valor de username

//----------------------------------------------------

const PI = 3.1415;
// PI = 100; este no es valido ya que es una constante

let nickName = 'An Yuli';

console.log(userName + " " + lastName);
console.log(PI);

//los caracteres que se pueden usar para una variable son $ _

//----------------------------------------------------

//OPERADORES 
let numberOne = 100;
let numberTwo = 500;

let result = numberOne + numberTwo; //cambiando el operador podemos optener un resultado diferente 

console.log(result);

// COMPARACION

let resultCompare = numberOne < numberTwo;

//EXISTEN VARIAS FORMAS DE COMPARACION 

/* 
let resultCompare = numberOne == numberTwo; IGUAL
let resultCompare = numberOne != numberTwo; DIFERENTE 
let resultCompare = numberOne <= numberTwo; MENOR IGUAL
let resultCompare = numberOne >= numberTwo;
let resultCompare = numberOne === numberTwo; 
*/

console.log(resultCompare) //obtendremos un buleano o es verdadero o es falso

//----------------------------------------------------

let nombre = "Yuliana Andrea";
let apellido = "Clavijo Zuluaga";

let completeName = name + lastName; //concanetacion

console.log(nombre + " " + apellido) // concanetacion

//------------------------------------------------------

let passwordDB = 'pepe123'
let input = '' //contraseña es incorrecta

let resultpassword = input == passwordDB; //COMPARACION arrojaria un false

//CONDICIONALES - CONTROL DE FLUJO

if(resultpassword === true){
    console.log('Login Correct');
}else{
    console.log('Login Incorrect');
}

/*
if(resultpassword === true){
    console,log('Login Correct');
}

if(resultpassword === false){
    console.log('Login Incorrect');
}
*/


console.log(resultpassword) 
/* estos son datos que estan siendo operados y no estan arrojando un 
resultado pero con este resultado nosotro no estamos haciendo nada */

//-------------------------------------------------------

// CONTROL DE FLUJO

let score = 70;

if(score > 30){
    console.log('You need to practice more');
}else if(score > 15){
    console.log('necesitas mejorar');
}else{
    console.log("You need to follow this tutorial");
}
 

//     -----      ------      ------     ------     ------  
let typeCard = "Debid Card";

switch(typeCard){
    case'Debid Card':
        console.log('This is a debid card');
        break;
    case'Credit Card':
        console.log('this is a credit card');
        break;
    default:
        console.log('You dont have card')
}


//---------------------------------------------------------

//BUCLES O ITERADORES

let count = 5;

while(count > 0){
    console.log(count)
    count = count - 1;
}

let countNe = 0;

while(countNe < 5){
    console.log(countNe);
    countNe++;
}










