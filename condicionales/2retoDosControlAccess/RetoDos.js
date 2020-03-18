let nameUser = 'Andrea';
let accessDirect;
accessDirect = prompt('Escriba su nombre de acceso directo');

if(nameUser === accessDirect ){
    alert('Bienvenida, ' + nameUser)
}else{
    alert('Lo siento pero el usuario que has introducido no está registrado')
}