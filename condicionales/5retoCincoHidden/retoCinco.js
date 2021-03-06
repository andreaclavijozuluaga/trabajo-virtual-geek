'use strict';
const activableSection=document.querySelector('div');

// Si contiene la clase .success
if (activableSection.classList.contains('success')) {
    activableSection.innerHTML='<h1>Correcto</h1><p>Los datos son correctos</p>';
}
else if (activableSection.classList.contains('error')) { // Sino
    activableSection.innerHTML='<h1>ERROR</h1><p>Ha surgido un error</p>';
}
else if (activableSection.classList.contains('warning')) { // Sino
    activableSection.innerHTML='<h1>¡Aviso!</h1><p>Revise la información</p>';
}
